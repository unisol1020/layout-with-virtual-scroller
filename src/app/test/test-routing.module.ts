import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBComponent, TestComponent } from './test.component';

export const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  },
  {
    path: '',
    component: SBComponent,
    outlet: 'lsidebar'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
