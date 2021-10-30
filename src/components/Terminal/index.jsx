import React, { useEffect, useRef, useState } from 'react';
import { XTerm } from 'xterm-for-react';
import { useSelector } from 'react-redux';
import { selectTerminalInput } from 'slices/emulatorSlice';

export default function Terminal() {
    const xtermRef = useRef(null);
    const [input, setInput] = useState('');
    const terminalInput = useSelector(selectTerminalInput);

    useEffect(() => {
        xtermRef.current.terminal.writeln('User Terminal for input output');
        xtermRef.current.terminal.write('>');
    }, []);

    useEffect(() => {
        xtermRef.current.terminal.write(terminalInput);
        setInput(terminalInput);
    }, [terminalInput]);

    const onData = (data) => {
        const code = data.charCodeAt(0);

        // If the user hits empty and there is something typed echo it.
        if (code === 13 && input.length > 0) {
            console.log(input);
            // xtermRef.current.terminal.write(
            //     "\r\nYou typed: '" + input + "'\r\n"
            // );
            // xtermRef.current.terminal.write("echo> ");
            xtermRef.current.terminal.writeln('');
            xtermRef.current.terminal.write('>');

            setInput('');
        } else if (code < 32 || code === 127) { // Disable control Keys such as arrow keys

        } else { // Add general key press characters to the terminal
            xtermRef.current.terminal.write(data);
            setInput(input + data);
        }
    };

    return (
        <XTerm
            ref={xtermRef}
            onData={onData}
            options={{
                lineHeight: 1,
                cursorBlink: true,
                cols: 50,
                rows: 18,
            }}
        />
    );
}
