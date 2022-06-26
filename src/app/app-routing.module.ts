import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/pages/post-list/post-list.component';
import { TodoListComponent } from './components/pages/todo-list/todo-list.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:TodoListComponent},
  {path:"todos",component:TodoListComponent},
  {path:"posts",component:PostListComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
