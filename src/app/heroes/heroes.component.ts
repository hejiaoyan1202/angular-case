import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heroes';

// 装饰器函数，为该组建添加angular需要的初始化元数据
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // 初始化一个英雄
  // hero = 'Windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  // 类中添加heros属性
  heroes = HEROS;
  // 添加属性selecterHero
  selectedHero: Hero;
  // 给selecterHero赋值
  onSelector(hero: Hero): void{
    this.selectedHero = hero;
  }
  constructor() { 
  }
  
  ngOnInit() {
    
  }

}
