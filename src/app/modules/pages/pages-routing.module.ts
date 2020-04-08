import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {SystemHealthComponent} from './system-health/system-health.component';
import { AuthGuard} from '../auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',component: PagesComponent, children: [
      {path: '', component: DashBoardComponent},
      {path: 'members/:name', component: SystemHealthComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
