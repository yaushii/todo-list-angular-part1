import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { taskService } from './services/task.services';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/ApiService';


const appRoutes: Routes = [
{path: 'tasks', component: TasksViewComponent},
{path: 'ajouter', component: NewTaskComponent},
{path: '', component:TasksViewComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksViewComponent,
    NewTaskComponent,
    

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [taskService,
    ApiService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
