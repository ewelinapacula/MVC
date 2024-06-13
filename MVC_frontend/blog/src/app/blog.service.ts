import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.baseUrl, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addComment(postId: number, comment: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${postId}/comments`, comment);
  }
}
