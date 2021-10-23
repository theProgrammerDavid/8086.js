import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import {
    setDisplay, selectDisplay,
} from 'slices/emulatorSlice';

import Terminal from 'components/Terminal';

const useStyles = makeStyles((theme) => ({
    display: {
        width: 'inherit',
        height: '40%',
        background: theme.palette.background.raised,
        borderRadius: '0.5rem',
        padding: '0.5rem',
        border: `1px solid ${theme.palette.border.main}`,
    },
    heading: {
        borderBottom: `1px solid ${theme.palette.border.main}`,
        padding: '0.5rem',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    menuItem: {
        color: 'black',
    },
}));

export default function Display() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const displayState = useSelector(selectDisplay);

    const handleChange = (event) => {
        dispatch(setDisplay(event.target.value));
    };

    const handleDisplay = () => {
        switch (displayState) {
        case '7segment':
            return <>7 segment</>;
        case 'terminal':
        default:
            return (
                <div className="terminal">
                    <Terminal />
                </div>
            );
        }
    };

    return (
        <div className={classes.display}>
            <div className={classes.heading}>
                Display
                <Select
                    className={classes.heading}
                    value={displayState}
                    onChange={handleChange}
                >
                    <MenuItem className={classes.menuItem} value="terminal">Terminal</MenuItem>
                    <MenuItem className={classes.menuItem} value="7segment">7 Segment</MenuItem>
                </Select>
            </div>
            {handleDisplay()}

        </div>
    );
}
