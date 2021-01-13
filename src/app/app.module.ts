import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info/info.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { AddComponent } from './component/add/add.component';
import { ListComponent } from './component/list/list.component';
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortBthPipe } from './pipes/sort-bth.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PersonsComponent,
    AddComponent,
    ListComponent,
    SortPipe,
    SearchPipe,
    SortBthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    SortPipe,
    SortBthPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
