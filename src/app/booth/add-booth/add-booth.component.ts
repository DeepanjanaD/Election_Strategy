import { Component, OnInit } from '@angular/core';
import { Booth } from '../booth';
import { BoothService } from 'src/app/Services/booth.service';
import { Router } from '@angular/router';
import { Ward } from 'src/app/voter-data/Divisions/ward';
import { WardServiceService } from 'src/app/Services/ward-service.service';
import { data } from 'jquery';

@Component({
  selector: 'app-add-booth',
  templateUrl: './add-booth.component.html',
  styleUrls: ['./add-booth.component.css']
})
export class AddBoothComponent implements OnInit{


  boothWard: Ward = new Ward("", "");
  booth: Booth = new Booth("", "", "N/A", "N/A", "N/A", "N/A", this.boothWard);
  Wards: Ward[] = [];

  constructor(private boothService: BoothService, 
    private router: Router,
    private wardService: WardServiceService) { }
  
  goToBoothList(): void {
    this.router.navigate(['/booth/viewBooth']);
  }

  saveBooth(): void {
    this.boothService.postBooth(this.booth).subscribe( data => {
      console.log(data);
      this.goToBoothList();
    }, error => console.log(error));
  }

  addWard(wardId : string, wardName : string): void {
    this.boothWard.wardId = wardId;
    this.boothWard.wardName = wardName;
    console.log(this.boothWard);
  }

  onSubmit(): void {
    this.saveBooth();
    console.log(this.booth);
  }

  ngOnInit(): void {
    this.wardService.getWardList().subscribe(data => {
      this.Wards = data;
      console.log(data);
    })
  }


}
