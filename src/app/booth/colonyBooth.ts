import { Colony } from "../colony/colony";
import { Booth } from "./booth";

export class BoothColony {
    colonyBoothId: string;
    colony: Colony;
    booth: Booth;
    constructor(colonyBoothId: string, colony: Colony, booth: Booth) {
        this.colonyBoothId = colonyBoothId;
        this.colony = colony;
        this.booth = booth;
    }
}