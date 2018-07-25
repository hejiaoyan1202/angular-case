import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  // 这是一个典型的“服务中的服务”场景： 你把 MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中
  constructor(private messageService: MessageService, private http: HttpClient) { }

  private heroesUrl = 'api/heroes';

  const httpOptions = {
    header: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // 添加一个getHero方法: 获取全部heroes列表
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(' fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  // 根据id获取某个hero
  getHero(id: number): Observable<Hero> {
    // return of(HEROES.filter(hero => hero.id === id));       // 返回值是匹配到的数组
    // return of(HEROES.find(hero => hero.id === id ));        // 返回值是匹配到的对象：不符合Observable<Hero[]>类型
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
    .pipe(
      tap(_ => this.log(` fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  // 保存修改的hero
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      tap(_ => this.log(` update hero id: ${hero.id}`)),
      catchError(this.handleError<any>(`updateHero`))
    );
  }

  private log(message: string) {
    this.messageService.add('httpService' + message);
  }

  // 错误处理器
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
