import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: 'users',
    component: MainComponent,
  },
  {
    path: '',
    component: CompanyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
