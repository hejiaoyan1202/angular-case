import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero[];

  constructor(
    private heroService: HeroService,
    private router: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  // 获取服务数据
  getHeroes(): void {
    const id = + this.router.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe( hero => this.hero = hero);
  }
  // 返回上级
  goBack(): void {
    this.location.back();
  }
}
