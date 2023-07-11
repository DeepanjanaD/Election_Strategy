import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectionComponent } from './election/election.component';
import { BoothComponent } from './booth/booth.component';
import { VoterDataComponent } from './voter-data/voter-data.component';
import { AddElectionComponent } from './election/add-election/add-election.component';
import { ViewElectionComponent } from './election/view-election/view-election.component';
import { EditElectionComponent } from './election/edit-election/edit-election.component';
import { ColonyComponent } from './colony/colony.component';
import { AddColonyComponent } from './colony/add-colony/add-colony.component';
import { ViewColonyComponent } from './colony/view-colony/view-colony.component';
import { EditColonyComponent } from './colony/edit-colony/edit-colony.component';
import { BoothColonyComponent } from './booth/booth-colony/booth-colony.component';
import { ViewBoothComponent } from './booth/view-booth/view-booth.component';
import { EditBoothComponent } from './booth/edit-booth/edit-booth.component';
import { AddBoothComponent } from './booth/add-booth/add-booth.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'election', component: ElectionComponent,
  children: [
    {path: '', redirectTo: 'addElection', pathMatch: 'full'},
    {path: 'addElection', component: AddElectionComponent},
    {path: 'viewElection', component: ViewElectionComponent},
    {path: 'editElection', component: EditElectionComponent},
    {path: 'editElection/:electionId', component: EditElectionComponent}
  ]},
  {path: 'booth', component: BoothComponent,
  children: [
    {path: 'boothColony', component: BoothColonyComponent},
    {path: 'boothColony/:boothId', component: BoothColonyComponent},
    {path: 'viewBooth', component: ViewBoothComponent},
    {path: 'editBooth', component: EditBoothComponent},
    {path: 'editBooth/:boothId', component: EditBoothComponent},
    {path: '', redirectTo: 'addBooth', pathMatch: 'full'},
    {path: 'addBooth', component: AddBoothComponent}
  ]},
  {path: 'voterData', component: VoterDataComponent},
  {path: 'colony', component: ColonyComponent,
  children: [
    {path: '', redirectTo: 'addColony', pathMatch: 'full'},
    {path: 'addColony', component: AddColonyComponent},
    {path: 'viewColony', component: ViewColonyComponent},
    {path: 'editColony', component: EditColonyComponent},
    {path: 'editColony/:colonyId', component: EditColonyComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
