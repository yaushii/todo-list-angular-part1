import { Component, OnInit, Input } from '@angular/core';
import { taskService } from '../services/task.services';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit {


  constructor(private taskService: taskService) {
  


   }
   

  ngOnInit(): void {
  }

  // effacer(id){
  // console.log(id)
  //  this.taskService.tasks.splice(id);
  //  console.log(this.taskService.tasks)
  // };

}
