import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StatisticsComponent } from './components/statistics/statistics.component'
import { SettingsComponent } from './components/settings/settings.component'

const routes: Routes = [
  { path: 'main' , component: MainComponent},
  { path: 'settings' , component: SettingsComponent},
  { path: 'statistics' , component: StatisticsComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
