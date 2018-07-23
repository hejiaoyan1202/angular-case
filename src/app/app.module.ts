import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';

// 关键性的元数据位于 @NgModule 装饰器中。最重要的 @NgModule 装饰器位于顶级类 AppModule 上。
@NgModule({
  // 申明組件
  declarations: [
    AppComponent, MessagesComponent,
    HeroesComponent,   // 自动添加
    HeroDetailComponent, 
    // AppRoutingModule,   
  ],
    // 该应用所需外部模块的引用列表。
  imports: [
    BrowserModule,
    FormsModule      // 手动添加
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
