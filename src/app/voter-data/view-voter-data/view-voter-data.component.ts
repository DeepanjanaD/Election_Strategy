import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { VoterData } from '../voterData';
import { VoterDataService } from 'src/app/Services/voter-data.service';
import { Booth } from 'src/app/booth/booth';
import { Colony } from 'src/app/colony/colony';
import { Election } from 'src/app/election/election';
import { AgeGroup } from '../Divisions/ageGroup';
import { Apartment } from '../Divisions/apartment';
import { Caste } from '../Divisions/caste';
import { Category } from '../Divisions/category';
import { Community } from '../Divisions/community';
import { Constituency } from '../Divisions/constituency';
import { ConstituencyService } from 'src/app/Services/constituency.service';

@Component({
  selector: 'app-view-voter-data',
  templateUrl: './view-voter-data.component.html',
  styleUrls: ['./view-voter-data.component.css']
})
export class ViewVoterDataComponent implements OnInit{

  constituencyList: Constituency[] = [];
  constituency: Constituency = new Constituency("", "");


  constructor(private constituencyService: ConstituencyService, private http: HttpClient, private el: ElementRef) { }

  getConstituencyVoterData(): void{
    // console.log(this.constituency);
  }

  getConstituencyList(): void{
    this.constituencyService.getConstituencyList().subscribe( data => {
      this.constituencyList = data;
      // console.log(this.constituencyList);
    }, error => console.log(error));
  }

  ngOnInit(): void {
    // this.getVoterDatas();
    this.getConstituencyList();
    const scriptElement = document.createElement('script');
    scriptElement.src = 'assets/table.js';
    document.head.appendChild(scriptElement);
    
  }




  
}
























  // communities: Community[] = [];
  // community: Community = new Community("", "");

  // categories: Category[] = [];
  // category: Category = new Category("", "");

  // castes: Caste[] = [];
  // caste: Caste = new Caste("", "");

  // elections: Election[] = [];
  // election: Election = new Election("", "");

  // booths: Booth[] = [];
  // booth: Booth = new Booth("", "", "", "" , "", "");

  // colonies: Colony[] = [];
  // colony: Colony = new Colony("", "", []);

  // ageGroups: AgeGroup[] = [];
  // ageGroup: AgeGroup = new AgeGroup("", 0 , 0 , "");

  // apartment: Apartment = new Apartment("", "", this.colony);
  // apartments: Apartment[] = [];

  // VoterDatas: VoterData[] = [];
  // voterData: VoterData = new VoterData("", this.community, this.category, this.caste, this.ageGroup, 0, this.booth, this.colony, this.apartment);

  // noOfVoters: string = "";





  // getVoterDatas(): void{
  //   this.voterDataService.getVoterData().subscribe( data => {
  //     data.forEach(voterData => {
  //       if(voterData.apartment == null){
  //         console.log("null");
  //         voterData.apartment = new Apartment("", "N/A", voterData.colony);
  //       }
  //       voterData.ageGroup.ageGroupName = voterData.ageGroup.minAge + " - " + voterData.ageGroup.maxAge;
  //     });
  //     this.VoterDatas = data;
  //     // console.log(this.VoterDatas);
  //   }, error => console.log(error));
  // }