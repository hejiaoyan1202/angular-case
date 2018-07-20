import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// 关键性的元数据位于 @NgModule 装饰器中。最重要的 @NgModule 装饰器位于顶级类 AppModule 上。
@NgModule({,
  declarations: [
    AppComponent,
    HeroesComponent,   // 自动添加
    HeroDetailComponent,    
  ],
  // 该应用所需外部模块的列表。
  imports: [
    BrowserModule,
    FormsModule      // 手动添加
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
