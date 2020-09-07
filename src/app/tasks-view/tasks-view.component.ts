import { Injectable, Component, OnInit } from '@angular/core';
import { taskService } from '../services/task.services';



@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.css']
})

@Injectable()
export class TasksViewComponent implements OnInit {

tasks: any [];


  constructor(private taskService: taskService, ) {
    
    
   }

    

  ngOnInit() {
    this.tasks = this.taskService.tasks;
    
  }

}
