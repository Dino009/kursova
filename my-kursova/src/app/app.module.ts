import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestingPipePipe } from './pipes/testing-pipe.pipe';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ProjectStatusComponent } from './components/project-status/project-status.component';
import { UpdatesComponent } from './components/updates/updates.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { VisitComponent } from './components/visit/visit.component';
import { TrafficComponent } from './components/traffic/traffic.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import { NoneComponent } from './components/none/none.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingPipePipe,
    HeaderComponent,
    SideMenuComponent,
    ProjectStatusComponent,
    UpdatesComponent,
    TicketsComponent,
    VisitComponent,
    TrafficComponent,
    DashboardComponent,
    NoneComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatTableModule,
    MatGridListModule,
    MatListModule,
    MatRadioModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
