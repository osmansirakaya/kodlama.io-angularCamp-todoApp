import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { TodoListComponent } from './components/pages/todo-list/todo-list.component';
import { PostListComponent } from './components/pages/post-list/post-list.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    TodoListComponent,
    PostListComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
