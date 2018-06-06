import * as _ from 'lodash';

///////////////////////////////////////
//
//
////////////////////////////////////////
export class Container {
    constructor(data: any) {
        _.assign(this, data);
    }
    name: string;
    image: string;
}

export class Pod {
    constructor(data: any) {
        _.assign(this, data);
    }
    name: string;
    createdAt: Date;
    containers: Container[];
    phase: string;
}
