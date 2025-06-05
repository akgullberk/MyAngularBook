import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"", redirectTo:"dashboard", pathMatch:"full"},
    {path:"dashboard", component:DashboardComponent},
    {path:"movies", component:MoviesComponent},
];
