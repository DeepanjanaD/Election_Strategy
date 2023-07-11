import { Component } from '@angular/core';

interface SideNavToogle{
  sreenwidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Election_Strategy';
}
