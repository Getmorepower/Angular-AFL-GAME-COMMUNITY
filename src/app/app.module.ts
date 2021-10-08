import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { teamiconscomponent } from './teamicons/teamicons.component';
import { TeamComponent } from './team/team.component';
import { gameinfocomponent } from './gameinfo/gameinfo.component';
import { selectedteamcomponent } from './selectedteam/selectedteam.component';

@NgModule({
  declarations: [
    AppComponent,
    teamiconscomponent,
    TeamComponent,
    gameinfocomponent,
    selectedteamcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
