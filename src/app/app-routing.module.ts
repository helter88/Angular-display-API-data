import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './modules/shared/display/display.component';
import { MainComponent } from './modules/shared/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'display',
    component: DisplayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
