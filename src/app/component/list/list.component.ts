import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persons, TypeDepartmen } from 'src/app/models/persons.model';
import { PersonsService } from 'src/app/services/persons.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import { SortBthPipe } from 'src/app/pipes/sort-bth.pipe';

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
// pipeSort!:SortPipe;

constructor(private personsService: PersonsService,
  private pipeSort: SortPipe,
  private pipeSortBth: SortBthPipe) {}

  ngOnInit(): void {
    this.editPersonsForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      otch: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      bth: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required])
    })
    this.persons = this.personsService.persons;
    console.log(this.persons)
  }
  OnDelete(id: any){
    this.personsService.persons.splice(id-1);
  }
  OnEdit(id: any){
    (!this.check)?(this.check = true):(this.check = false);
    console.log(this.check)
    this.name = this.personsService.persons[id-1].name;
    this.surname = this.personsService.persons[id-1].surname;
    this.otch = this.personsService.persons[id-1].patronymic;
    this.phone = this.personsService.persons[id-1].phone;
    this.email = this.personsService.persons[id-1].email;
    this.bth = this.personsService.persons[id-1].birthday;
    this.type = this.personsService.persons[id-1].department;
    this.id = id;
    console.log(this.type);

  }
  editCheck(){
    (!this.check)?(this.check = true):(this.check = false);
  }
  saveChanges(){
    (!this.check)?(this.check = true):(this.check = false);
    console.log(this.name+" id:"+this.id)
    this.personsService.persons[this.id-1].name = this.name;
    this.personsService.persons[this.id-1].surname = this.surname;
    this.personsService.persons[this.id-1].patronymic = this.otch;
    this.personsService.persons[this.id-1].phone = this.phone;
    this.personsService.persons[this.id-1].email = this.email;
    this.personsService.persons[this.id-1].birthday = this.bth;
    this.personsService.persons[this.id-1].department = this.type;
  }
  sortBth(){
    this.persons = this.pipeSortBth.transform(this.persons)
  }
  sortId(){
    this.persons = this.pipeSort.transform(this.persons)
  }
}

