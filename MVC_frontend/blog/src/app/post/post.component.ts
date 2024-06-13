import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void { }

  createPost(title: string, content: string) {
    const post = { title, content };
    this.blogService.createPost(post).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

  onSubmit(title: string, content: string) {
    this.createPost(title, content);
  }
}
