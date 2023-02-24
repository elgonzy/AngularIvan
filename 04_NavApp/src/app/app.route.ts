import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { EmpleatsComponent } from "./components/empleats/empleats.component";
import { EmpleatComponent } from "./components/empleat/empleat.component";
import { PostsComponent } from "./components/posts/posts.component";
import { CommentsComponent } from "./components/comments/comments.component";

export const ROUTES: Routes=[
   {path:'home',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'empleats',component:EmpleatsComponent},
   {path: 'empleat/:id', component:EmpleatComponent},
   {path: 'posts',component:PostsComponent},
   {path:'posts/:id/comments', component: CommentsComponent},
   {path:'',pathMatch:'full',redirectTo:'home'},
   {path:'**',pathMatch:'full',redirectTo:'home'},
];