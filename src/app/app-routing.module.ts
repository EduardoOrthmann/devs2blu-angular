import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FirstExercisesListComponent } from './components/first-exercises-list/first-exercises-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'first-exercises-list', component: FirstExercisesListComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
