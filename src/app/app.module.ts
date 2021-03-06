import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesComponent }  from './heroes.component';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from "./hero.service";
//import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpModule } from '@angular/http';
import { HeroSearchComponent } from './hero-search.component';

// imports for in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                  AppRoutingModule ],
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent,
                  HeroSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ],
})
export class AppModule { }
