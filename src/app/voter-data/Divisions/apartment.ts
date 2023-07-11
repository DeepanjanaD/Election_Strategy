import { Colony } from "src/app/colony/colony";

export class Apartment{
    apartmentId: string;
    apartmentName: string;
    colony: Colony;

    constructor(apartmentId: string, apartmentName: string, colony: Colony){
        this.apartmentId = apartmentId;
        this.apartmentName = apartmentName;
        this.colony = colony;
    }
}