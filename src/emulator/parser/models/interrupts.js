export class Interrupt {
    /**
     *
     * @param {*} args
     *  type:'Hardware/Software/Bios/Dos'
     *  code: hex number
     */
    constructor({ type, code }) {
        this.type = type;
        this.code = code;
    }
}

export class HardwareInterrupt extends Interrupt {
    constructor({ code }) {
        super({ type: 'Hardware', code });
    }
}

export class DosInterrupt extends Interrupt {
    constructor({ code }) {
        super({ type: 'Dos', code });
    }
}

export class BiosInterrupt extends Interrupt {
    constructor({ code }) {
        super({ type: 'Dos', code });
    }
}
