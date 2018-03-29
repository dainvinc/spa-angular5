import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Vishal';
  email: string = 'vishal.koosuri1@gmail.com';
  phone: number = 2649013;
  users: string[] = [];
  isEdit: boolean = false;
  temp: string;
  
  constructor() {
    console.log("In constructor...");
    
  }
  
  ngOnInit() {
    console.log("Ng in it...");
    
    this.users = ['Vishal', 'Adarsh'];
  }
  
  toggleEdit(username) {
    console.log(this.isEdit);
    this.isEdit = !this.isEdit;
    console.log("name " +username);
    
    this.temp = this.users[username];
  }
  
  updateUser(newuser) {
    console.log(newuser + " " + this.users.indexOf(newuser));
    
    this.users[this.users.indexOf(this.temp)] = newuser;
  }
}
