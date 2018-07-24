import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// 注释，之后元数据来源于heroService;
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
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

  // 类中定义heros属性,
  heroes: Hero[];
  // 添加属性selecterHero
  selectedHero: Hero;
  // 给selecterHero赋值
  onSelector(hero: Hero): void {
    this.selectedHero = hero;
  }
  // 1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点
  constructor(private heroService: HeroService) {
  }

  // 生命周期钩子中，获取初始化元数据，类似服务器请求；
  ngOnInit() {
    this.getHeroes();
  }

// 创建一个函数，以从服务中获取这些英雄数据
getHeroes(): void {
  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
}
}
