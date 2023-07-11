import { Component, OnInit } from '@angular/core';
import { Community } from './Divisions/community';
import { CommunityService } from '../Services/community.service';
import { Category } from './Divisions/category';
import { CategoryService } from '../Services/category.service';
import { CasteService } from '../Services/caste.service';
import { Caste } from './Divisions/caste';
import { Election } from '../election/election';
import { ElectionService } from '../Services/election.service';
import { ColonyBoothService } from '../Services/colony-booth.service';
import { Booth } from '../booth/booth';
import { Colony } from '../colony/colony';
import { AgeGroup } from './Divisions/ageGroup';
import { AgeGroupService } from '../Services/age-group.service';
import { Apartment } from './Divisions/apartment';
import { ApartmentService } from '../Services/apartment.service';
import { VoterData } from './voterData';
import { VoterDataService } from '../Services/voter-data.service';
import { VoterDataGetService } from '../Services/voter-data-get.service';

@Component({
  selector: 'app-voter-data',
  templateUrl: './voter-data.component.html',
  styleUrls: ['./voter-data.component.css']
})
export class VoterDataComponent implements OnInit {
  
  //Each Component has an array of objects of its own type and an object of its own type
  //For Example: Community[] and Community
  //the Array of objects is used to store the data fetched from the database
  //the Object is used to store the data entered by the user in the form

  //For VoterData Post, there is a voterData object. The properties of this object are then bound to the form fields using saveDetails() method

  communities: Community[] = [];
  community: Community = new Community("", "");

  categories: Category[] = [];
  category: Category = new Category("", "");

  castes: Caste[] = [];
  caste: Caste = new Caste("", "");

  elections: Election[] = [];
  election: Election = new Election("", "");

  booths: Booth[] = [];
  booth: Booth = new Booth("", "", "", "" , "", "");

  colonies: Colony[] = [];
  colony: Colony = new Colony("", "", []);

  ageGroups: AgeGroup[] = [];
  ageGroup: AgeGroup = new AgeGroup("", 0 , 0 , "");

  apartment: Apartment = new Apartment("", "", this.colony);
  apartments: Apartment[] = [];

  VoterDatas: VoterData[] = [];
  voterData: VoterData = new VoterData("", this.community, this.category, this.caste, this.ageGroup, 0, this.booth, this.colony, this.apartment);

  noOfVoters: string = "";

  //constructors for each service are injected here
  constructor(private communityService: CommunityService,
    private catgoryService: CategoryService,
    private casteService: CasteService,
    private electionService: ElectionService,
    private colonyBoothService: ColonyBoothService,
    private ageGroupService: AgeGroupService,
    private apartmentService: ApartmentService,
    private voterDataService: VoterDataService,
    private voterDataGetService: VoterDataGetService) { }

  //this method is called when submit button is clicked
  onSubmit(): void
  {
    //binds the data entered by the user to the voterData object
    this.saveDetails();
    console.log(this.election);
    //posts the voterData object to the database
    this.saveVoterData();
    console.log(this.voterData);
  } 

  //post method for voterData
  saveVoterData(): void{
    //found in voter-data.service.ts in Services folder
    this.voterDataService.postVoterData(this.voterData).subscribe( data => {
      console.log(data);
    }, error => console.log(error));
  }

  saveDetails(): void{
    this.voterData.noOfVoters = parseInt(this.noOfVoters);
    this.voterData.community = this.community;
    this.voterData.category = this.category;
    this.voterData.caste = this.caste;
    this.voterData.ageGroup = this.ageGroup;
    this.voterData.booth = this.booth;
    this.voterData.colony = this.colony;
    this.voterData.apartment = this.apartment;
    console.log(this.voterData);
  }

  //loaded when the page is loaded

  //gets the communities from the database
  getCommunities(): void{
    this.communityService.getCommunities().subscribe( data => {
      this.communities = data;
      console.log(this.communities);
    }, error => console.log(error));
  }

  //gets the categories from the database
  getCategories(): void{
    this.catgoryService.getCategories().subscribe( data => {
      this.categories = data;
      console.log(this.categories);
    }, error => console.log(error));
  }

  //gets the castes from the database
  getCastes(): void{
    this.casteService.getCaste().subscribe( data => {
      this.castes = data;
      console.log(this.castes);
    }, error => console.log(error));
  }

  //gets the ageGroups from the database
  getAgeGroups(): void{
    this.ageGroupService.getAgeGroups().subscribe( data => {
      this.ageGroups = data;
      this.ageGroups.forEach(ageGroup => {
        ageGroup.ageGroupName = ageGroup.minAge + " - " + ageGroup.maxAge;
      });
      console.log(this.ageGroups);
    }, error => console.log(error));
  }

  //gets the elections from the database
  getElections(): void{
    this.electionService.getElectionList().subscribe( data => {
      this.elections = data;
      console.log(this.elections);
    }, error => console.log(error));
  }

  //gets the booths from the database
  getBooths(): void{
    this.colonyBoothService.getBoothsFromColonyBooth().subscribe( data => {
      this.booths = data;
      console.log(this.booths);
    }, error => console.log(error));
  }

  //gets the colonies from the database (based on booth selected) called by getColoniesOfBooth()
  getColonies(boothId: string): void{
    this.colonyBoothService.getColonyByBoothId(boothId).subscribe( data => {
      this.colonies = data;
      console.log(this.colonies);
    }, error => console.log(error));
  }

  //gets the apartments from the database (based on colony selected) called by getApartmentsOfColony()
  getApartments(colonyId: string): void{
    this.apartmentService.getApartmentsOfColony(colonyId).subscribe( data => {
      this.apartments = data;
      console.log(this.apartments);
    }, error => console.log(error));
  }


  getColoniesOfBooth(boothId: string){
    console.log(boothId);
    this.getColonies(boothId);
  }

  getApartmentsOfColony(colonyId: string){
    this.getApartments(colonyId);
  }

  //gets the voterDatas from the database
  //attempt but failed
  // voter data properties(community, category, etc) are getting duplicated over and over again
  getVoterDatas(): void{
    this.voterDataGetService.getVoterData().subscribe( data => {
      console.log(data);
      data.forEach(Data => {
        this.voterData.voterDataId = Data.voterDataId;
        this.voterDataService.getCommunityOfVoterData(Data.voterDataId).subscribe( community => {
          this.voterData.community = community;
          console.log(this.voterData.community);
        }, error => console.log(error));

        this.voterDataService.getCategoryOfVoterData(Data.voterDataId).subscribe( category => {
          this.voterData.category = category;
          // console.log(this.voterData.category);
        }, error => console.log(error));

        this.voterDataService.getCasteOfVoterData(Data.voterDataId).subscribe( caste => {
          this.voterData.caste = caste;
          // console.log(this.voterData.caste);
        }, error => console.log(error));

        this.voterDataService.getAgeGroupOfVoterData(Data.voterDataId).subscribe( ageGroup => {
          this.voterData.ageGroup = ageGroup;
          this.voterData.ageGroup.ageGroupName = ageGroup.minAge + " - " + ageGroup.maxAge;
          // console.log(this.voterData.ageGroup);
        }, error => console.log(error));

        this.voterDataService.getBoothOfVoterData(Data.voterDataId).subscribe( booth => {
          this.voterData.booth = booth;
          // console.log(this.voterData.booth);
        }, error => console.log(error));

        this.voterDataService.getColonyOfVoterData(Data.voterDataId).subscribe( colony => {
          this.voterData.colony = colony;
          // console.log(this.voterData.colony);
        }, error => console.log(error));

        this.voterDataService.getApartmentOfVoterData(Data.voterDataId).subscribe( apartment => {
          if(apartment == null){
            // console.log("apartment is null");
            this.voterData.apartment = new Apartment("", "N/A", this.voterData.colony);
          }
          else{
            this.voterData.apartment = apartment;
          }
          // console.log(this.voterData.apartment);
        }, error => console.log(error));

        console.log(this.voterData);
      });
    }, error => console.log(error));
  }

  

  ngOnInit(): void {

    
    this.getCommunities();
    this.getCategories();
    this.getCastes();
    this.getElections();
    this.getBooths();
    this.getAgeGroups();
    // this.getVoterDatas();
    
  }

}
