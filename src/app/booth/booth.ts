export class Booth{
    boothId: string;
    boothName: string;
    returningOfficer: string;
    verificationOfficer: string;
    votingAdministrator: string;
    location: string;

    constructor(boothId: string, boothName: string, returningOfficer: string, verificationOfficer: string, votingAdministrator: string, location: string){
        this.boothId = boothId;
        this.boothName = boothName;
        this.returningOfficer = returningOfficer;
        this.verificationOfficer = verificationOfficer;
        this.votingAdministrator = votingAdministrator;
        this.location = location;
    }
}