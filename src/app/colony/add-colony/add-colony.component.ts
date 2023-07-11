import { Component } from '@angular/core';
import { Colony } from '../colony';
import { ColonyService } from 'src/app/Services/colony.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-colony',
  templateUrl: './add-colony.component.html',
  styleUrls: ['./add-colony.component.css']
})
export class AddColonyComponent {

  colony: Colony = new Colony("", "", []);

  constructor(private colonyService: ColonyService,
    private router: Router) { }

  goToColonyList(): void {
    this.router.navigate(['/colony/viewColony']);
  }

  saveColony(): void {
    this.colonyService.postColony(this.colony).subscribe( data => {
      console.log(data);
      this.goToColonyList();
    }, error => console.log(error));
  }

  onSubmit(): void {
    console.log(this.colony);
    this.saveColony();
  }

}
