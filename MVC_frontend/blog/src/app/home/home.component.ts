import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.http.get('http://localhost:8080/api/posts').subscribe(data => {
      this.posts = data;
    }, error => {
      console.error('Error:', error);
    });
  }

  deletePost(id: string) {
    this.http.delete(`http://localhost:8080/api/posts/${id}`).subscribe(data => {
      this.getPosts();
    });
  }
}
