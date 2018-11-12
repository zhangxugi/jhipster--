export interface IIdentity {
    id?: number;
    name?: string;
    idNum?: string;
    gender?: string;
    birthday?: string;
    phone?: string;
    province?: string;
    city?: string;
    county?: string;
    photoGroup?: string;
    photoPath?: string;
    frontGroup?: string;
    frontPath?: string;
    backGroup?: string;
    backPath?: string;
}

export class Identity implements IIdentity {
    constructor(
        public id?: number,
        public name?: string,
        public idNum?: string,
        public gender?: string,
        public birthday?: string,
        public phone?: string,
        public province?: string,
        public city?: string,
        public county?: string,
        public photoGroup?: string,
        public photoPath?: string,
        public frontGroup?: string,
        public frontPath?: string,
        public backGroup?: string,
        public backPath?: string
    ) {}
}
