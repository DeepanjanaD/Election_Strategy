import { Component, OnInit } from '@angular/core';
import { Booth } from '../booth';
import { BoothService } from 'src/app/Services/booth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Colony } from 'src/app/colony/colony';
import { ColonyBoothService } from 'src/app/Services/colony-booth.service';
import { BoothColony } from '../colonyBooth';
import { ColonyService } from 'src/app/Services/colony.service';

@Component({
  selector: 'app-edit-booth',
  templateUrl: './edit-booth.component.html',
  styleUrls: ['./edit-booth.component.css']
})
export class EditBoothComponent implements OnInit {

  boothId: string = "";
  booth: Booth = new Booth("", "", "", "", "", "");
  Colonies: Colony[] = [];
  colonyId: string = "";
  colonyBoothId: string = "";


  constructor(private boothService: BoothService,
    private route: ActivatedRoute,
    private router: Router,
    private colonyBoothService: ColonyBoothService,
    private colonyService: ColonyService) {
  }
  

  gotoBoothList(): void {
    this.router.navigate(['/booth/viewBooth']);
  }

  removeColony(colonyId: string){
    console.log("COLONY ID ", colonyId, "BOOTH ID ", this.boothId);
    this.colonyService.getColonyById(colonyId).subscribe( data => {
      this.colonyBoothId = data.colonyBoothFromColony[0].colonyBoothId
      console.log("COLONY-BOOTH-ID ", this.colonyBoothId);
      this.colonyBoothService.deleteColonyBooth(this.colonyBoothId).subscribe( data => {
        console.log(data);
        this.getColonyFromBooth(this.boothId);
      }, error => console.log(error));
    }, error => console.log(error));
  }

  
  getBooth(boothId: string){
    this.boothService.getBoothById(boothId).subscribe( data => {
      this.booth = data;
      this.getColonyFromBooth(boothId);
    }, error => console.log(error));
  }

  getColonyFromBooth(boothId: string){
    this.colonyBoothService.getColonyByBoothId(boothId).subscribe( data => {
      this.Colonies = data;
      console.log(this.Colonies);
    }, error => console.log(error));
  }

  ngOnInit(): void {
    this.boothId = this.route.snapshot.paramMap.get('boothId') ?? "";
    this.getBooth(this.boothId);
  }

  onSubmit(){
    this.boothService.updateBooth(this.boothId, this.booth).subscribe( data => {
      console.log(data);
      this.gotoBoothList();
    }, error => console.log(error));
  }


}
