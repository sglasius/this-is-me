import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowtimesComponent } from './secure/showtimes/showtimes.component';
import { LandingComponent } from './shared/landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'showtimes', component: ShowtimesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
