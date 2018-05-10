import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  providers: [PostsService]
})
export class UserInfoComponent  {
  userInfo: userInfo;
  showUserHobbies: boolean;

  constructor(private postsService: PostsService) {
    this.userInfo = {
      name: 'Sandeep',
      email: 'sandeep@xyz.in',
      age: 31,
      address: {
        street: '121',
        city: 'New York',
        state: 'NY'
      },
      hobbies: ['Cricket', 'Music', 'News'],
      posts: []
    }
    this.showUserHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.userInfo.posts = posts;
    });
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
  hobbies: string[];
  posts: post[];
}

interface address {
  street: string;
  city: string;
  state: string;
}

interface post {
  id: number;
  title: string;
  body: string;
}
