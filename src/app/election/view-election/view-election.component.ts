import { Component, OnInit } from '@angular/core';
import { Election } from '../election';
import { ElectionService } from '../../Services/election.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-election',
  templateUrl: './view-election.component.html',
  styleUrls: ['./view-election.component.css']
})
export class ViewElectionComponent implements OnInit {

  Elections: Election[] = [];
  delElection: Election = new Election("", "");

  constructor(private electionService: ElectionService,
    private router: Router) { }


  ngOnInit(): void {
    this.getElectionList();

  }

  private getElectionList() {
    this.electionService.getElectionList().subscribe(data => {
      this.Elections = data;
    });
  }

  editElection(electionId: string) {
    this.router.navigate(['/election/editElection', electionId]);
  }

  deleteElection(electionId: string) {
    this.electionService.getElectionById(electionId).subscribe(data => {
      this.delElection = data;
      console.log(this.delElection);
      this.electionService.deleteElection(electionId, this.delElection).subscribe(data => {
        console.log(data);
        this.getElectionList();
      }, error => console.log(error));

    }, error => console.log(error));

  }
}
