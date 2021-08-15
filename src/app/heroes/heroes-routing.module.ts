import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "./pages/list/list.component";
import { NewHeroComponent } from './pages/new-hero/new-hero.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'listado',
                component: ListComponent,
            },
            {
                path: 'agregar',
                component: NewHeroComponent,
            },
            {
                path: 'editar/:id',
                component: NewHeroComponent,
            },
            {
                path: 'buscar',
                component: SearchComponent,
            },
            {
                path: ':id',
                component: HeroeComponent,
            },
            {
                path: '**',
                redirectTo: 'listado'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRouterModule {}