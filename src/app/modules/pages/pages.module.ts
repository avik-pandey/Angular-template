import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { SystemHealthComponent } from './system-health/system-health.component';



@NgModule({
  declarations: [PagesComponent, DashBoardComponent, SystemHealthComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ],
  providers: [AuthService, AuthGuard]
})
export class PagesModule {
}
