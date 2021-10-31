export default class Label {
    constructor({ name, posittion, lineNumber }) {
        this.name = name;
        this.posittion = posittion;
        this.lineNumber = lineNumber;
    }
}

export class LabelDeclaration {
    constructor({ name, posittion, lineNumber }) {
        this.name = name;
        this.posittion = posittion;
        this.lineNumber = lineNumber;
    }
}
