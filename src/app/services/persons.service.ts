import { Injectable } from '@angular/core';
import { Persons } from '../models/persons.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons: Persons[] = [{  id: 1,
    name: "ivan",
    surname: "ivanov",
    patronymic: "ivanovich",
    phone: 78997444,
    email: "maufwoo@gmail.com",
    birthday: "1999-05-11",
    department: 0
  },
  {  id: 2,
    name: "petr",
    surname: "petrov",
    patronymic: "petrovich",
    phone: 99383839,
    email: "yjjkk@gmail.com",
    birthday: "1754-08-06",
    department: 1
  },
  {  id: 3,
    name: "Rufina",
    surname: "Gataullina",
    patronymic: "Rinatovna",
    phone: 784888,
    email: "loliyyy@gmail.com",
    birthday: "2003-08-09",
    department: 2
  }
];
  constructor(private http: HttpClient) {
   }


}
