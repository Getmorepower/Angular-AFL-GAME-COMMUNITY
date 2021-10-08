import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Tip } from '../tip';
import { Game } from '../game';
import { DataService } from '../data.service';



@Component({
  selector: 'app-teamicons',
  templateUrl: './teamicons.component.html',
  styleUrls: ['./teamicons.component.scss']
})
export class teamiconscomponent implements OnInit {

  teams!: Team[];
  tips!: Tip[];
  games!: Game[];
  selectedTeam!: Team;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAFLTeams();
    
  }
  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

}