import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../Services/election.service';
import { Election } from '../election';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-election',
  templateUrl: './edit-election.component.html',
  styleUrls: ['./edit-election.component.css']
})
export class EditElectionComponent implements OnInit {

  electionId: string = "";
  election: Election = new Election("","");

  constructor(private electionService: ElectionService,
    private route: ActivatedRoute, private router: Router) { }
  
  goToElectionList() {
    this.router.navigate(['/election/viewElection']);
  }

  onSubmit() : void {
    this.electionService.updateElection(this.electionId, this.election).subscribe( data => {
      console.log(data);
      this.goToElectionList();
    },
    error => console.log(error));
    
  }

  ngOnInit(): void {
    this.electionId = this.route.snapshot.paramMap.get('electionId') ?? "";
    this.electionService.getElectionById(this.electionId).subscribe( data => {
      this.election = data;
      console.log(this.election);
    }, error => console.log(error));
  }

}
