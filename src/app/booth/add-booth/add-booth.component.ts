import { Component } from '@angular/core';
import { Booth } from '../booth';
import { BoothService } from 'src/app/Services/booth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-booth',
  templateUrl: './add-booth.component.html',
  styleUrls: ['./add-booth.component.css']
})
export class AddBoothComponent {

  booth: Booth = new Booth("", "", "N/A", "N/A", "N/A", "N/A");

  constructor(private boothService: BoothService, 
    private router: Router) { }

  goToBoothList(): void {
    this.router.navigate(['/booth/viewBooth']);
  }

  saveBooth(): void {
    this.boothService.postBooth(this.booth).subscribe( data => {
      console.log(data);
      this.goToBoothList();
    }, error => console.log(error));
  }

  onSubmit(): void {
    this.saveBooth();
  }

}
