import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[]=[];

  constructor(private cridaPostsServei: PostsService, private router: Router) { 
    this.cridaPostsServei.getPosts().subscribe(
      (data:any) =>{this.posts = data}
    )
  }

  ngOnInit(): void {
  }

  showComments(id: string){
    this.router.navigate(['posts',id,'comments']);
  }

}
