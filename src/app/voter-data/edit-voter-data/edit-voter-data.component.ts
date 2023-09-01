import { Component, OnInit } from '@angular/core';
import { Booth } from 'src/app/booth/booth';
import { Colony } from 'src/app/colony/colony';
import { Election } from 'src/app/election/election';
import { AgeGroup } from '../Divisions/ageGroup';
import { Apartment } from '../Divisions/apartment';
import { Caste } from '../Divisions/caste';
import { Category } from '../Divisions/category';
import { Community } from '../Divisions/community';
import { VoterData } from '../voterData';
import { ActivatedRoute, Router } from '@angular/router';
import { VoterDataService } from 'src/app/Services/voter-data.service';
import { AgeGroupService } from 'src/app/Services/age-group.service';
import { ApartmentService } from 'src/app/Services/apartment.service';
import { CasteService } from 'src/app/Services/caste.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ColonyBoothService } from 'src/app/Services/colony-booth.service';
import { CommunityService } from 'src/app/Services/community.service';
import { ElectionService } from 'src/app/Services/election.service';
import { VoterDataGetService } from 'src/app/Services/voter-data-get.service';
import { Ward } from '../Divisions/ward';

@Component({
  selector: 'app-edit-voter-data',
  templateUrl: './edit-voter-data.component.html',
  styleUrls: ['./edit-voter-data.component.css']
})
export class EditVoterDataComponent  implements OnInit{
  communities: Community[] = [];
  community: Community = new Community("", "");

  categories: Category[] = [];
  category: Category = new Category("", "");

  castes: Caste[] = [];
  caste: Caste = new Caste("", "");

  elections: Election[] = [];
  election: Election = new Election("", "");

  booths: Booth[] = [];
  booth: Booth = new Booth("", "", "", "" , "", "", new Ward("", ""));

  colonies: Colony[] = [];
  colony: Colony = new Colony("", "", []);

  ageGroups: AgeGroup[] = [];
  ageGroup: AgeGroup = new AgeGroup("", 0 , 0 , "");

  apartment: Apartment = new Apartment("", "", this.colony);
  apartments: Apartment[] = [];

  VoterDatas: VoterData[] = [];
  voterData: VoterData = new VoterData("", this.community, this.category, this.caste, this.ageGroup, 0, this.booth, this.colony, this.apartment);

  noOfVoters: string = "";
  editVoterDataId: string = "";

  constructor(private route: ActivatedRoute,
    private voterDataService: VoterDataService,
    private communityService: CommunityService,
    private catgoryService: CategoryService,
    private casteService: CasteService,
    private electionService: ElectionService,
    private colonyBoothService: ColonyBoothService,
    private ageGroupService: AgeGroupService,
    private apartmentService: ApartmentService,
    private voterDataGetService: VoterDataGetService,
    private router: Router) { }
 

  onSubmit(): void {
   
    this.voterData.noOfVoters = parseInt(this.voterData.noOfVoters.toString());
    console.log(this.voterData);
    this.voterDataService.updateVoterData(this.voterData).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/voterData']);
    }, error => console.log(error));
  }

  getVoterDataById(voterDataId: string){
    this.voterDataService.getVoterDataById(voterDataId).subscribe((data: any) => {
      if(data.apartment == null){
        data.apartment = new Apartment("", "N/A", this.colony);
      }
      data.ageGroup.ageGroupName = data.ageGroup.minAge + " - " + data.ageGroup.maxAge;
      this.voterData = data;
      this.getColoniesOfBooth(this.voterData.booth.boothId);
      this.getApartmentsOfColony(this.voterData.colony.colonyId);
      console.log(this.voterData);
      // this.bindDataToForm(this.voterData);
    }, error => console.log(error));
  }

  getCommunities(): void{
    this.communityService.getCommunities().subscribe( data => {
      this.communities = data;
      console.log(this.communities);
    }, error => console.log(error));
  }

  getCategories(): void{
    this.catgoryService.getCategories().subscribe( data => {
      this.categories = data;
      console.log(this.categories);
    }, error => console.log(error));
  }

  getCastes(): void{
    this.casteService.getCaste().subscribe( data => {
      this.castes = data;
      console.log(this.castes);
    }, error => console.log(error));
  }

  getAgeGroups(): void{
    this.ageGroupService.getAgeGroups().subscribe( data => {
      this.ageGroups = data;
      this.ageGroups.forEach(ageGroup => {
        ageGroup.ageGroupName = ageGroup.minAge + " - " + ageGroup.maxAge;
      });
      console.log(this.ageGroups);
    }, error => console.log(error));
  }

  getElections(): void{
    this.electionService.getElectionList().subscribe( data => {
      this.elections = data;
      console.log(this.elections);
    }, error => console.log(error));
  }

  getBooths(): void{
    this.colonyBoothService.getBoothsFromColonyBooth().subscribe( data => {
      this.booths = data;
      console.log(this.booths);
    }, error => console.log(error));
  }

  getColonies(boothId: string): void{
    this.colonyBoothService.getColonyByBoothId(boothId).subscribe( data => {
      this.colonies = data;
      console.log(this.colonies);
    }, error => console.log(error));
  }

  getColoniesOfBooth(boothId: string){
    console.log(boothId);
    this.getColonies(boothId);
  }

  getApartments(colonyId: string): void{
    this.apartmentService.getApartmentsOfColony(colonyId).subscribe( data => {
      this.apartments = data;
      console.log(this.apartments);
    }, error => console.log(error));
  }

  getApartmentsOfColony(colonyId: string){
    this.getApartments(colonyId);
  }

  ngOnInit(): void {
    this.editVoterDataId = this.route.snapshot.paramMap.get('voterDataId') ?? "";
    this.getVoterDataById(this.editVoterDataId);

    this.getCommunities();
    this.getCategories();
    this.getCastes();
    this.getElections();
    this.getBooths();
    this.getAgeGroups();

  }

  goToVoterData(): void{
    this.router.navigate(['/voterData']);
  }

}
