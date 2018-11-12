export interface IDriver {
    id?: number;
    dname?: string;
    dsex?: string;
}

export class Driver implements IDriver {
    constructor(public id?: number, public dname?: string, public dsex?: string) {}
}
