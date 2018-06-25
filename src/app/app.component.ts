import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { Post } from './interfaces/post';
import { Token } from './interfaces/token';
import { User } from './interfaces/user';
import { Comment } from './interfaces/comment';
import { Photo } from './interfaces/photo';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns = ['userId', 'id', 'title', 'body'];
  posts : Post[];
  comments: Comment[];
  photos: Photo[];
  user : User;

  constructor(
    private postService: PostService,
    private commentService : CommentService,
    private photoService : PhotoService
  ){
  }

  ngOnInit(): void {   

   this.postService
    .getPost()
    .subscribe( (posts : Post[]) => { 
      this.posts = posts;  
    });

    this.postService
    .getToken()
    .subscribe( (oauth : Token)  => { 
      localStorage.setItem('token', oauth.token);
      localStorage.setItem('ok', oauth.ok);
    });

    this.postService
     .getUser()
     .subscribe( (details: any ) => { 
        this.user = details.user; 
     });

     this.commentService
     .getComment()
     .subscribe( (comments : Comment[])  => {
        this.comments = comments;
     });

    this.photoService
      .getPhoto()
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
      });

  }
}
