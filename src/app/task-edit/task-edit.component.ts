import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  model: Task = new Task();

  saveTask() {
    this.taskDataService.editTask(this.model).subscribe(t=>
      this.router.navigate(["info/" + this.model.id]))
  }

  constructor(private taskDataService: TaskDataService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskDataService
        .getTask(+params["id"])
        .subscribe(t => (this.model = t));
    })
  }

}
