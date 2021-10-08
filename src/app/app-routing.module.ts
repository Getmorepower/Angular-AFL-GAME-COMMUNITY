import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { teamiconscomponent } from './teamicons/teamicons.component';
import { TeamComponent } from './team/team.component';
import { gameinfocomponent } from './gameinfo/gameinfo.component';
import { selectedteamcomponent } from './selectedteam/selectedteam.component'

const routes: Routes = [
  { path: 'ViewLeagueTable', component: teamiconscomponent},
  { path: 'Team', component: TeamComponent},
  { path: 'TeamResult', component:gameinfocomponent},
  { path: 'selectedteam', component:selectedteamcomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
