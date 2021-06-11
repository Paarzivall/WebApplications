import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-herodesc',
  templateUrl: './herodesc.component.html',
  styleUrls: ['./herodesc.component.css']
})
export class HerodescComponent implements OnInit {
  heroes: Hero[] = [];
  changeText:boolean=true;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  showInfo(hero: Hero): void {
    alert(hero.descryption)
    
  }
}
