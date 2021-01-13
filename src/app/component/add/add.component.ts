import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonsService } from 'src/app/services/persons.service';
import { TypeDepartmen } from 'src/app/models/persons.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  myDepartmentType = TypeDepartmen;
  type:number = 0;
  personsForm!: FormGroup;
  constructor(private personsService: PersonsService ) { }

  ngOnInit(): void {
    this.personsForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required])
    })
  }
  onAddPerson(){
    this.personsService.persons.push(this.personsForm.value);
    this.personsService.persons[this.personsService.persons.length-1].id = this.personsService.persons.length
    this.personsForm.reset();
  }

}
