import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  newComment: { [key: number]: string } = {}; // For holding new comment content for each post

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.blogService.getPosts().subscribe(data => {
      console.log('Loaded posts:', data); // Dodaj logowanie dla debugowania
      this.posts = data.map((post: any) => ({ ...post, showComments: false }));
    }, error => {
      console.error('Error loading posts:', error); // Logowanie błędów
    });
  }

  toggleComments(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.showComments = !post.showComments;
    }
  }

  addComment(postId: number): void {
    const content = this.newComment[postId];
    if (content) {
      this.blogService.addComment(postId, { content }).subscribe(() => {
        this.loadPosts(); // Reload the posts after adding a comment
        this.newComment[postId] = ''; // Clear the input field
      });
    }
  }

  deletePost(id: number): void {
    this.blogService.deletePost(id).subscribe(() => {
      this.loadPosts(); // Reload the posts after deletion
    });
  }
}
