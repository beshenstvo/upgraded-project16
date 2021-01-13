import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './pages/info/info.component';
import { PersonsComponent } from './pages/persons/persons.component';

const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'persons',
    component: PersonsComponent
  },
  {
    path: '',
    component: InfoComponent
  },
  {
    path: 'persons/:id',
    component: PersonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
