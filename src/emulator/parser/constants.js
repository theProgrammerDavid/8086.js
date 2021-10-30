export const nonToken = [
    ' ',
    '\t',
];

export const mainRegisters = [
    'AX', 'BX', 'CX', 'DX',
    'AL', 'BL', 'CL', 'DL',
    'AH', 'BH', 'CH', 'DH',
];

export const indexRegisters = [
    'DI', 'SI', 'BP', 'SP',
];

export const segmentRegisters = [
    'DS', 'ES', 'SS', 'CS',
];

export const registers = [
    ...mainRegisters,
    ...indexRegisters,
    ...segmentRegisters,
];

export const instructionMnemonics = [
    'AAA',
    'AAD',
    'AAM',
    'AAS',
    'ADC',
    'ADD',
    'AND',
    'CALL',
    'CBW',
    'CLC',
    'CLD',
    'CLI',
    'CMC',
    'CMP',
    'CMPSB',
    'CMPSW',
    'CWD',
    'DAA',
    'DAS',
    'DEC',
    'DIV',
    'HLT',
    'IDIV',
    'IMUL',
    'IN',
    'INC',
    'INT',
    'INTO',
    'IRET',
    'JA',
    'JAE',
    'JB',
    'JBE',
    'JC',
    'JCXZ',
    'JE',
    'JG',
    'JGE',
    'JL',
    'JLE',
    'JMP',
    'JNA',
    'JNAE',
    'JNB',
    'JNBE',
    'JNC',
    'JNE',
    'JNG',
    'JNGE',
    'JNL',
    'JNLE',
    'JNO',
    'JNP',
    'JNS',
    'JNZ',
    'JO',
    'JP',
    'JPE',
    'JPO',
    'JS',
    'JZ',
    'LAHF',
    'LDS',
    'LEA',
    'LES',
    'LODSB',
    'LODSW',
    'LOOP',
    'LOOPE',
    'LOOPNE',
    'LOOPNZ',
    'LOOPZ',
    'MOV',
    'MOVSB',
    'MOVSW',
    'MUL',
    'NEG',
    'NOP',
    'NOT',
    'OR',
    'OUT',
    'POP',
    'POPA',
    'POPF',
    'PUSH',
    'PUSHA',
    'PUSHF',
    'RCL',
    'RCR',
    'REP',
    'REPE',
    'REPNE',
    'REPNZ',
    'REPZ',
    'RET',
    'RETF',
    'ROL',
    'ROR',
    'SAHF',
    'SAL',
    'SAR',
    'SBB',
    'SCASB',
    'SCASW',
    'SHL',
    'SHR',
    'STC',
    'STD',
    'STI',
    'STOSB',
    'STOSW',
    'SUB',
    'TEST',
    'XCHG',
    'XLATB',
    'XOR',
];

const bitmask = (index) => 0b1 << index;

export const flags = {
    sign: bitmask(7),
    zero: bitmask(6),
    auxilliary: bitmask(4),
    carry: bitmask(0),
    overflow: bitmask(11),
    directional: bitmask(10),
    interrupt: bitmask(9),
    trap: bitmask(8),
    parity: bitmask(2),
};

export const isHardwareInterrupt = (interruptValue) => interruptValue === 0xF
    || (interruptValue >= 0xA && interruptValue <= 0xD);

export const hardwareInterruptTable = {
    DIVISION_BY_ZERO: 0x00,
    SINGLE_STEP: 0x1,
    NON_MASKABLE: 0x2,
    BREKAPOINT: 0x3,
    OVERFLOW: 0x4,
    PRINT_SCREEN: 0x5,
    // 0x6 and 0x7 are reserved
    TIMER: 0x8,
    KEYBOARD: 0x9,
    // hardware interrupts are from 0xA to 0xD
    DISKETTE: 0xE,
};

export const isBiosInterrupt = (interruptValue) => interruptValue >= 0x10 && interruptValue <= 0x17;

export const isDosInterrupt = (interruptValue) => interruptValue >= 0x20 && interruptValue <= 0x2F;

export const systemCallTable = {
    ROM_BASIC: 0x18,
    BOOTSTRAP: 0x19,
    TIME_IO: 0x1A,
    KEYBOARD_BREAK: 0x1B,
    USER_TIMER_INTERRUPT: 0x1C,
};

export const softwareInterruptTable = {
    VIDEO_PARAMETERS: 0x1D,
    DISKETTE_PARAMETERS: 0x1E,
    GRAPHICS_PARAMETERS: 0x1F,
    HDD_O_PARAMETERS: 0x41,
    HDD_1_PARAMETERS: 0x46,
    EGA_GRAPHIC_CHARACTERS: 0x44,
    USER_ALARM_ADDRESS: 0x4A,
    CMOS_TIMER_INTERRUPT: 0x50,
};

export const dosInterruptTable = {
    PROGRAM_TERMINATE: 0x20,
    DOS_SYSTEM_CALL: 0x21,
    TERMINATE_ADDRESS: 0x22,
    CONTROL_BREAK_ADDRESS: 0x23,
    CRITICAL_ERROR_HANDLER_ADDRESS: 0x24,
    ABSOLUTE_DISK_READ: 0x25,
    ABSOLUTE_DISK_WRITE: 0x26,
    TERMINATE_AND_STAY_RESIDENT: 0x27,
    DOS_TIME_SLICE: 0x28,
    PERFORM_DOS_COMMAND: 0x2E,
    MULTIPLES_INTERRUPTS: 0x2F,
};

export const dosSystemCallTable = {
    INPUT_CHAR: 0x1,
    INPUT_STRING: 0xA,
    DISPLAY_CHAR: 0x2,
    DISPLAY_STRING: 0x9,
    TERMINATE_PROGRAM: 0x4C,
};
