import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  // 添加一个getHero方法
  getHeroes(): Observable<Hero[]> {
    // add a message
    this.messageService.add('data is coming');
    // of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组
    return of(HEROES);
  }
  // 这是一个典型的“服务中的服务”场景： 你把 MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中
  constructor(private messageService: MessageService) { }
}
