import { Component, OnInit } from '@angular/core';
import { Booth } from '../booth';
import { BoothService } from 'src/app/Services/booth.service';
import { Router } from '@angular/router';
import { Ward } from 'src/app/voter-data/Divisions/ward';

@Component({
  selector: 'app-view-booth',
  templateUrl: './view-booth.component.html',
  styleUrls: ['./view-booth.component.css']
})
export class ViewBoothComponent implements OnInit {
  
  Booths: Booth[] = [];
  delBooth: Booth = new Booth("", "", "", "", "", "", new Ward("", ""));

  constructor(private boothService: BoothService,
    private router: Router) { }

  editBooth(boothId: string){
    this.router.navigate(['/booth/editBooth', boothId]);
  }

  addColonyAssociation(boothId: string){
    this.router.navigate(['/booth/boothColony', boothId]);
  }

  deleteBooth(boothId: string){
    this.boothService.getBoothById(boothId).subscribe(data => {
      this.delBooth = data;
      this.boothService.deleteBooth(boothId, this.delBooth).subscribe(data => {
        console.log(data);
        this.getBoothList();
      }, error => console.log(error));
    }, error => console.log(error));

  }

  getBoothList(){
    this.boothService.getBoothList().subscribe(data => {
      this.Booths = data;
    }, error => console.log(error));
  }

  ngOnInit(): void {
    this.getBoothList();
  }


}
