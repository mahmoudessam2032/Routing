import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users:object[]=[
    {name:"ahmed,age:20"},
    {name:"mahmoud,age:20"},
    {name:"mohamed,age:20"},
    {name:"mostafa,age:20"},
    {name:"ali,age:20"},
    {name:"eslam,age:20"},
  ]

  
}
