import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewHeroComponent } from './pages/new-hero/new-hero.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    NewHeroComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
