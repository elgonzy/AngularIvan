import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { EmpleatsService } from './services/empleats.service';
import { EmpleatsComponent } from './components/empleats/empleats.component';
import { EmpleatComponent } from './components/empleat/empleat.component';
import { PostsService } from './services/posts.service';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    EmpleatsComponent,
    EmpleatComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{useHash:true}),
    HttpClientModule
  ],
  providers: [EmpleatsService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
