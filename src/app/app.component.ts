import { Component } from '@angular/core';
import { ListComponent } from './component/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getData!: ListComponent;
  title = 'project16';
  constructor(){}
  ngOnInit(): void {
  }
}
