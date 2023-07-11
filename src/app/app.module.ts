import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectionComponent } from './election/election.component';
import { BoothComponent } from './booth/booth.component';
import { VoterDataComponent } from './voter-data/voter-data.component';
import { AddElectionComponent } from './election/add-election/add-election.component';
import { ViewElectionComponent } from './election/view-election/view-election.component';
import { EditElectionComponent } from './election/edit-election/edit-election.component';

import { HttpClientModule } from '@angular/common/http';
import { ColonyComponent } from './colony/colony.component';
import { AddColonyComponent } from './colony/add-colony/add-colony.component';
import { ViewColonyComponent } from './colony/view-colony/view-colony.component';
import { EditColonyComponent } from './colony/edit-colony/edit-colony.component';
import { BoothColonyComponent } from './booth/booth-colony/booth-colony.component';
import { ViewBoothComponent } from './booth/view-booth/view-booth.component';
import { EditBoothComponent } from './booth/edit-booth/edit-booth.component';
import { AddBoothComponent } from './booth/add-booth/add-booth.component';

// FILTER IMPORT 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    ElectionComponent,
    BoothComponent,
    VoterDataComponent,
    AddElectionComponent,
    ViewElectionComponent,
    EditElectionComponent,
    ColonyComponent,
    AddColonyComponent,
    ViewColonyComponent,
    EditColonyComponent,
    BoothColonyComponent,
    ViewBoothComponent,
    EditBoothComponent,
    AddBoothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
