import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroimages',
  templateUrl: './heroimages.component.html',
  styleUrls: ['./heroimages.component.css']
})
export class HeroimagesComponent implements OnInit {
  heroes: Hero[] = [];
  changeText:boolean=true;
  toggle:boolean = true;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  showHeroImage(hero: Hero): void {
    var name = "img_" + hero.id;
    var img = document.getElementById(name)!;
    if(img.classList.value=="old"){
      img.classList.remove("old");
      img.classList.add("new");
    }else if(img.classList.value=="new"){
      img.classList.remove("new");
      img.classList.add("old");
    }
    
    
  }
}
