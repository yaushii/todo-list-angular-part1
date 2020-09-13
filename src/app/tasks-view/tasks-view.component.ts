import { Injectable, Component, OnInit } from '@angular/core';
import { taskService } from '../services/task.services';
import { ApiService } from '../services/ApiService';


@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.css']
})

@Injectable()
export class TasksViewComponent implements OnInit {
api$;
tasks: any [];


  constructor(private taskService: taskService, private apiService: ApiService ) {
    
    
   }

  fetchPeople(){
    this.api$ = this.apiService.fetchPoeple();
  }

  ngOnInit() {
    
    
  }

  effacer(id: number){
    this.api$ = this.apiService.delete(id);
    console.log(id)
    };

}
