export class VoterDataGet{
    voterDataId: string;
    noOfVoters: number;

    constructor(voterDataId: string, noOfVoters: number){
        this.voterDataId = voterDataId;
        this.noOfVoters = noOfVoters;
    }
}