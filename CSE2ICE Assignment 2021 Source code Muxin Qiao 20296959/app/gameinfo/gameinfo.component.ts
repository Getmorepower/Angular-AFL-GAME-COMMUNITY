import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Game } from '../game';
import { Team } from '../team';
import { Tip } from '../tip';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gameinfo',
  templateUrl: './gameinfo.component.html',
  styleUrls: ['./gameinfo.component.scss']
})
export class gameinfocomponent implements OnInit {

  games!:Game[];
  tips!: Tip[];
 
  @Input() team!: Team;
  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getTips();
    }
    if (changes['team']) {
      this.getGames();
    }
  }

  ngOnInit(): void {
  }
  

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { 
      var tempArr: Tip[] = [];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id) tempArr.push(element);
      });
      
      this.tips = tempArr;    
    });  
  }

  


  
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      temp.forEach(element => {
        if(element.winnerteamid == this.team.id) tempArr.push(element);
      });
      
      this.games = tempArr;    
    });
  }



  
  
}
