import { Component, OnInit } from '@angular/core';
import { Colony } from '../colony';
import { ColonyService } from 'src/app/Services/colony.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-colony',
  templateUrl: './view-colony.component.html',
  styleUrls: ['./view-colony.component.css']
})
export class ViewColonyComponent implements OnInit{
  

  Colonies: Colony[] = [];
  delColony: Colony = new Colony("", "", []);

  constructor(private colonyService: ColonyService,
    private router: Router) { }

  editColony(colonyId: string){
    console.log(colonyId);
    this.router.navigate(['/colony/editColony', colonyId]);
  }

  getColonyList(){
    this.colonyService.getColonyList().subscribe(data => {
      this.Colonies = data;
    }, error => console.log(error));
  }
  
  deleteColony(colonyId: string){
    this.colonyService.getColonyById(colonyId).subscribe(data => {
      this.delColony = data;
      console.log(this.delColony);
      this.colonyService.deleteColony(colonyId, this.delColony).subscribe(data => {
        console.log(data);
        this.getColonyList();
      }, error => console.log(error));

    }, error => console.log(error));

  }

  ngOnInit(): void {
    this.getColonyList();
  }

}
