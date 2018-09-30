import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CommonDataService {

    constructor() { }

    GetData() {
        return "My Name is :xyz";
    }

    MaskAccountNumber(str) {

        var trailingCharsIntactCount = 4;
        str = new Array(str.length - trailingCharsIntactCount + 1).join('x') + str.slice(-trailingCharsIntactCount);
        return str;
    }
}
