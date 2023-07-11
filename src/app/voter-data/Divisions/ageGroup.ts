export class AgeGroup{
    ageGroupId: string;
    minAge: number;
    maxAge: number;
    ageGroupName: string;

    constructor(ageGroupId: string, minAge: number, maxAge: number, ageGroupName: string){
        this.ageGroupId = ageGroupId;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.ageGroupName = ageGroupName;
    }

}