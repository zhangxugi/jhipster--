export interface ICar {
    id?: number;
    cname?: string;
}

export class Car implements ICar {
    constructor(public id?: number, public cname?: string) {}
}
