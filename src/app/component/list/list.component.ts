import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persons, TypeDepartmen } from 'src/app/models/persons.model';
import { PersonsService } from 'src/app/services/persons.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import { SortBthPipe } from 'src/app/pipes/sort-bth.pipe';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
searchStr: string = '';
editPersonsForm!: FormGroup;
myDepartmentType = TypeDepartmen; 
id: number = -1;
check: boolean = false;
persons: Persons[] = [];
name: string = '';
surname: string = '';
otch: string = '';
phone: number = 0;
email: string = '';
bth: number = 0;
type: number = 0;

constructor(private personsService: PersonsService,
  private pipeSort: SortPipe,
  private pipeSortBth: SortBthPipe, 
  private http: HttpClient) {}

  ngOnInit(): void {
    this.editPersonsForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required])
    })
    //this.persons = this.personsService.persons;
    //console.log(this.persons)
    this.http.get('http://localhost:3000/persons').subscribe((data: any) => this.persons=data);
  }

  OnDelete(id: any){
    //this.personsService.persons.splice(id-1);
    return this.http.delete(`http://localhost:3000/persons/`+id).subscribe(data => {
      console.log(data);
    });
    console.log(id);
  }
  OnEdit(id: any){
    (!this.check)?(this.check = true):(this.check = false);
    console.log(this.check)
    this.name = this.persons[id-1].name;
    this.surname = this.persons[id-1].surname;
    this.otch = this.persons[id-1].patronymic;
    this.phone = this.persons[id-1].phone;
    this.email = this.persons[id-1].email;
    this.bth = this.persons[id-1].birthday;
    this.type = this.persons[id-1].department;
    this.id = id;
    console.log(this.type);
  }
  editCheck(){
    (!this.check)?(this.check = true):(this.check = false);
  }
  saveChanges(){
    (!this.check)?(this.check = true):(this.check = false);
    // console.log(this.name+" id:"+this.id)
    // this.persons[this.id-1].name = this.name;
    // this.persons[this.id-1].surname = this.surname;
    // this.persons[this.id-1].patronymic = this.otch;
    // this.persons[this.id-1].phone = this.phone;
    // this.persons[this.id-1].email = this.email;
    // this.persons[this.id-1].birthday = this.bth;
    // this.persons[this.id-1].department = this.type;
    this.http.put('http://localhost:3000/persons/' + this.id, this.editPersonsForm.value).subscribe(data => {
      console.log(data);
    });

  }
  sortBth(){
    this.persons = this.pipeSortBth.transform(this.persons)
  }
  sortId(){
    this.persons = this.pipeSort.transform(this.persons)
  }
}

