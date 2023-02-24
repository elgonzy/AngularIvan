import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private cridahttp: HttpClient) {}

  private getQuery(query: string){
    const url = `https://jsonplaceholder.typicode.com/${query}`;
    //const url = 'https://jsonplaceholder.typicode.com/'+query;
    return this.cridahttp.get(url);
  }

  getPosts(){
    return this.getQuery('posts');
  }

  getComment(id:string){
    return this.getQuery(`posts/${id}/comments`)
  }
}
