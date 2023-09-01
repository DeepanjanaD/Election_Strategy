import { Ward } from "../voter-data/Divisions/ward";

export class Booth{
    boothId: string;
    boothName: string;
    returningOfficer: string;
    verificationOfficer: string;
    votingAdministrator: string;
    location: string;
    boothWard : Ward;

    constructor(boothId: string, boothName: string, returningOfficer: string, verificationOfficer: string, 
        votingAdministrator: string, location: string, boothWard : Ward){
            
        this.boothId = boothId;
        this.boothName = boothName;
        this.returningOfficer = returningOfficer;
        this.verificationOfficer = verificationOfficer;
        this.votingAdministrator = votingAdministrator;
        this.location = location;
        this.boothWard = boothWard;
    }
}