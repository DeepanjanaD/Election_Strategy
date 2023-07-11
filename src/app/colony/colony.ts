import { BoothColony } from "../booth/colonyBooth";

export class Colony{
    colonyId: string;
    colonyName: string;
    colonyBoothFromColony: BoothColony[];;

    constructor(colonyId: string, colonyName: string, colonyBoothFromColony: BoothColony[]){
        this.colonyId = colonyId;
        this.colonyName = colonyName;
        this.colonyBoothFromColony = colonyBoothFromColony;
    }
}