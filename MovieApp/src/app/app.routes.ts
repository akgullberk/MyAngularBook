import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const routes: Routes = [
    {path:"", redirectTo:"dashboard", pathMatch:"full"},
    {path:"dashboard", component:DashboardComponent},
    {path:"movies", component:MoviesComponent},
    {path:"detail/:id", component:MovieDetailComponent},

];
