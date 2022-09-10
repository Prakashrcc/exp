import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelComponent } from './hotel/hotel.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'activity', component: ActivityComponent },
  { path: 'hotel', component: HotelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: RouterModule){}
 }


