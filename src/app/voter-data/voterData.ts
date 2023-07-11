import { Booth } from "../booth/booth";
import { Colony } from "../colony/colony";
import { AgeGroup } from "./Divisions/ageGroup";
import { Apartment } from "./Divisions/apartment";
import { Caste } from "./Divisions/caste";
import { Category } from "./Divisions/category";
import { Community } from "./Divisions/community";

export class VoterData{
    voterDataId: string;
    community: Community;
    category: Category;
    caste: Caste;
    ageGroup: AgeGroup;
    noOfVoters: number;
    booth: Booth;
    colony: Colony;
    apartment: Apartment;

    constructor(voterDataId: string, community: Community, category: Category, caste: Caste, ageGroup: AgeGroup, noOfVoters: number, 
        booth: Booth, colony: Colony, apartment: Apartment){

        this.voterDataId = voterDataId;
        this.community = community;
        this.category = category;
        this.caste = caste;
        this.ageGroup = ageGroup;
        this.noOfVoters = noOfVoters;
        this.booth = booth;
        this.colony = colony;
        this.apartment = apartment;
    }
}