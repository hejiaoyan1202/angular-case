import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './/app-routing.module';

// 关键性的元数据位于 @NgModule 装饰器中。最重要的 @NgModule 装饰器位于顶级类 AppModule 上。
@NgModule({
  // 申明組件
  declarations: [
    AppComponent, MessagesComponent, HeroDetailComponent,
    HeroesComponent, DashboardComponent,
  ],
    // 该应用所需外部模块的引用列表。
  imports: [
    BrowserModule,
    FormsModule,      // 手动添加
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
