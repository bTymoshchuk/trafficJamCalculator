import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SettingsComponent } from './components/settings/settings.component';
import {RefreshComponent} from './components/refresh/refresh.component';
import {LoadingComponent} from './components/loading/loading.component';

const routes: Routes = [
  { path: 'main' , component: MainComponent},
  { path: 'settings' , component: SettingsComponent},
  { path: 'statistics' , component: StatisticsComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'refresh', component: RefreshComponent},
  { path: 'loading', component: LoadingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
