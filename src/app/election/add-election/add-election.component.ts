import { Component, OnInit } from '@angular/core';
import { Election } from '../election';
import { ElectionService } from '../../Services/election.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-election',
  templateUrl: './add-election.component.html',
  styleUrls: ['./add-election.component.css']
})
export class AddElectionComponent implements OnInit {

  election: Election = new Election("","");


  myScriptElement: HTMLScriptElement;
  constructor(private electionService: ElectionService,
    private router: Router) { 
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/CloseBtn.js";
    document.body.appendChild(this.myScriptElement);
  }
  
  goToElectionList() {
    this.router.navigate(['/election/viewElection']);
  }

  saveElection() {
    this.electionService.postElection(this.election).subscribe( data => {
      console.log(data);
      this.goToElectionList();
    },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.election);
    this.saveElection();
  }


  ngOnInit(): void {
  }

}
