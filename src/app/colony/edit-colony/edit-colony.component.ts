import { Component, OnInit } from '@angular/core';
import { Colony } from '../colony';
import { ColonyService } from 'src/app/Services/colony.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-colony',
  templateUrl: './edit-colony.component.html',
  styleUrls: ['./edit-colony.component.css']
})
export class EditColonyComponent implements OnInit {
  
  colonyId: string = "";
  colony: Colony = new Colony("", "", []);

  constructor(private colonyService: ColonyService,
    private route: ActivatedRoute,
    private router: Router) { }

  gotoColonyList(): void{
    this.router.navigate(['/colony/viewColony']);
  }

  onSubmit(): void{
    this.colonyService.updateColony(this.colonyId, this.colony).subscribe( data => {
      console.log(data);
      this.gotoColonyList();
    },
    error => console.log(error));
  }

  ngOnInit(): void {
    this.colonyId = this.route.snapshot.paramMap.get('colonyId') ?? "";
    this.colonyService.getColonyById(this.colonyId).subscribe( data => {
      this.colony = data;
      console.log(this.colony);
    }, error => console.log(error));
  }

}
