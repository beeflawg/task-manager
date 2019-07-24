import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit {
  model: Task = new Task();
  tasks: Task[];

  constructor(private taskDataService: TaskDataService, private router:Router, private route: ActivatedRoute) { }

  deleteTask(id:number) {
    this.taskDataService.deleteTask(id).subscribe(t=>
      this.router.navigate(["list"]));
  }
 

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskDataService
        .getTask(+params["id"])
        .subscribe(t => (this.model = t));
    })
  }

}
