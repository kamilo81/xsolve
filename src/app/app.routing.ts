import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './home/home.component';
import {UsersComponent} from "./home/users/users.component";
import {AlbumsComponent} from "./home/albums/albums.component";
import {AlbumComponent} from "./home/albums/album.component";
import {StatsComponent} from "./home/stats/stats.component";

const appRoutes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'stats',
        component: StatsComponent
      },
      {
        path: 'albums',
        component: AlbumsComponent,
        children: [
          {
            path: ':id',
            component: AlbumComponent,
          }
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full',
  }

];

export const routerModule = RouterModule.forRoot(appRoutes, {
  // enableTracing: true
});


