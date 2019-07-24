import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskDataService } from '../../services/task-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  model: Task = new Task();

  addTask() {
    this.taskDataService.addTask(this.model).subscribe(
      t=>
      this.router.navigate(["list"])
      );
  }

  constructor(private taskDataService: TaskDataService, private router : Router) { }

  ngOnInit() {
  }

}
