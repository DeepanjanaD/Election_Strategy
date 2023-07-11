import { Component, OnInit } from '@angular/core';
import { ColonyService } from 'src/app/Services/colony.service';
import { Colony } from 'src/app/colony/colony';
import { Booth } from '../booth';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BoothService } from 'src/app/Services/booth.service';
import { ColonyBoothService } from 'src/app/Services/colony-booth.service';
import { BoothColony } from '../colonyBooth';



@Component({
  selector: 'app-booth-colony',
  templateUrl: './booth-colony.component.html',
  styleUrls: ['./booth-colony.component.css']
})
export class BoothColonyComponent implements OnInit {

  Colonies: Colony[] = [];
  LinkedColonies: Colony[] = [];
  NoLinkColonies: Colony[] = [];
  FormColony: Colony = new Colony("", "", []);
  colony: Colony = new Colony("", "", []);
  booth: Booth = new Booth("", "", "", "", "", "");
  boothId: string = "";
  colonyIds: string[] = [];

  constructor(private colonyService: ColonyService,
    private route: ActivatedRoute,
    private boothService: BoothService,
    private colonyBoothService: ColonyBoothService,
    private router: Router) { }
  

  onSubmit(): void {
    this.goToBoothList();
  }

  submitFunction(boothId: string, colonyIds: string[]){
    this.colonyBoothService.postColonyBooth(this.boothId, this.colonyIds).subscribe(data => {
      console.log(data);
      this.colony.colonyId = "";
      this.colony.colonyName = "";
      // console.log("COLONY IDS", this.colonyIds);
      this.getColonyList();
    }, error => console.log(error));
    
  }


  addColonyAssosiation(colonyId: string, boothId: string){
    this.colonyService.getColonyById(colonyId).subscribe(data => {
      this.colony = data;
      this.colonyIds.push(this.colony.colonyId);
      // console.log(this.colonyIds);
      // console.log(boothId);
      this.colonyBoothService.postColonyBooth(this.boothId, this.colonyIds).subscribe(data => {
        console.log(data);
        this.colony.colonyId = "";
        this.colony.colonyName = "";
        this.FormColony.colonyName = "";
        // console.log("COLONY IDS", this.colonyIds);
        this.getColonyList();
      }, error => console.log(error));
    }, error => console.log(error));
  }

  getColonyList(){
    this.colonyService.getColonyList().subscribe(data => {
      this.NoLinkColonies = data;

      this.colonyBoothService.getColoniesFromColonyBooth().subscribe(data => {
        this.LinkedColonies = data;
        this.Colonies = this.NoLinkColonies.filter(colony =>
          !this.LinkedColonies.some(linkedColony => linkedColony.colonyId === colony.colonyId)
        );
      }, error => console.log(error));

    }, error => console.log(error));
  }


  ngOnInit(): void {
    this.boothId = this.route.snapshot.paramMap.get('boothId') ?? "";
    this.boothService.getBoothById(this.boothId).subscribe( data => {
      this.booth = data;
      console.log(this.booth);
    }, error => console.log(error));
    this.getColonyList();
  }

  goToBoothList(){
    this.router.navigate(['/booth/viewBooth']);
  }

}
