import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavBarComponent } from 'src/app/modules/user/nav-bar/nav-bar.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { DisplayListPosterComponent } from './display-list-poster/display-list-poster.component';
import { DisplayMovieDetailsComponent } from './display-movie-details/display-movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: DisplayListPosterComponent,
      },
      {
        path: 'movie/:id',
        component: DisplayMovieDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
