import { Component } from '@angular/core';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent  {
  userInfo: userInfo;
  showUserHobbies: boolean;

  constructor() {
    this.userInfo = {
      name: 'Sandeep',
      email: 'sandeep@xyz.in',
      age: 31,
      address: {
        street: '121',
        city: 'New York',
        state: 'NY'
      },
      hobbies: ['Cricket', 'Music', 'News']
    }
    this.showUserHobbies = false;
  }

  toggleUserHobbies() {
    this.showUserHobbies = !this.showUserHobbies;
  }

  addHobby(hobby: string) {
    this.userInfo.hobbies.push(hobby);
  }  
  
  deleteHobby(hobbyIndex: number) {
    this.userInfo.hobbies.splice(hobbyIndex, 1);
  }
}

interface userInfo {
  name: string;
  email: string;
  age: number;
  address: address;
  hobbies: string[]
}

interface address {
  street: string;
  city: string;
  state: string;
}
