import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private cridaPostsServei: PostsService) { 
      this.activatedRoute.params.subscribe(
        (params)=>{
          this.cridaPostsServei.getComment(params['id']).subscribe(
            (data:any)=> {this.comments = data}
          );
        }
      );
    }

  ngOnInit(): void {
  }

}
