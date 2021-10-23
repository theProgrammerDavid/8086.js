import { createSlice } from '@reduxjs/toolkit';
import emulator from 'emulator/emulator';

const initialState = {
    registers: {
        past: [],
        present: emulator.getRegisters(),
        future: [],
    },
    memory: {
        past: [],
        present: emulator.getSerialisableMemory(),
        future: [],
    },
    code: '',
    error: {
        isRaised: false,
    },
    theme: 'dracula',
    display: 'terminal',
};

const emulatorSlice = createSlice({
    name: 'emulator',
    initialState,
    reducers: {
        setDisplay(state, action) {
            state.display = action.payload;
        },
        updateCode(state, action) {
            state.code = action.payload;
        },
        updateRegisters(state, action) {
            // state.registers.past = [...state.registers.past, state.registers.present];
            state.registers.present = action.payload;
        },
        updateMemory(state, action) {
            // state.memory.past = [...state.memory.past, state.memory.present];
            state.memory.present = action.payload;
        },
        raiseError(state, action) {
            state.error = { isRaised: true, ...action.payload };
        },
        clearError(state) {
            state.error = { isRaised: false };
        },
        setTheme(state, action) {
            state.theme = action.payload;
        },
        executeStep(state, action) {
            const { registers, memory } = action.payload;

            state.registers.past = [...state.registers.past, state.registers.present];
            state.registers.present = registers;
            state.registers.future = [];

            state.memory.past = [...state.memory.past, state.memory.present];
            state.memory.present = memory;
            state.memory.future = [];
        },
        stepBack(state) {
            if (
                state.registers.past.length === 0
                || state.memory.past.length === 0
            ) {
                console.log('Couldnt step back');
                return;
            }

            const len = state.registers.past.length;

            state.registers.future = [state.registers.present, ...state.registers.future];
            state.registers.present = state.registers.past[len - 1];
            state.registers.past = state.registers.past.slice(0, -1);

            state.memory.future = [state.memory.present, ...state.memory.future];
            state.memory.present = state.memory.past[len - 1];
            state.memory.past = state.memory.past.slice(0, -1);
        },
        stepForward(state) {
            if (
                state.registers.future.length === 0
                || state.memory.future.length === 0
            ) {
                console.log('Couldnt step forward');
                return;
            }

            state.registers.past = [...state.registers.past, state.registers.present];
            [state.registers.present] = state.registers.future;
            state.registers.future = state.registers.future.slice(1);

            state.memory.past = [...state.memory.past, state.memory.present];
            [state.memory.present] = state.memory.future;
            state.memory.future = state.memory.future.slice(1);
        },
        resetRegMemState(state) {
            state.registers = {
                past: [],
                present: emulator.getRegisters(),
                future: [],
            };
            state.memory = {
                past: [],
                present: emulator.getMemory(),
                future: [],
            };
        },
    },
});

export const selectState = (state) => state.emulator;
export const selectCode = (state) => state.emulator.code;
export const selectMemory = (state) => state.emulator.memory.present;
export const selectRegisters = (state) => state.emulator.registers.present;
export const selectError = (state) => state.emulator.error;
export const selectTheme = (state) => state.emulator.theme;
export const selectDisplay = (state) => state.emulator.display;

export const {
    updateCode,
    updateRegisters,
    updateMemory,
    raiseError,
    clearError,
    setTheme,
    executeStep,
    stepBack,
    stepForward,
    resetRegMemState,
    setDisplay,
} = emulatorSlice.actions;

export default emulatorSlice.reducer;
