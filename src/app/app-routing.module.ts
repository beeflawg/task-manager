import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskInfoComponent } from './components/task-info/task-info.component';


const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: TaskListComponent},
  {path: "add", component: TaskAddComponent},
  {path: "edit/:id", component: TaskEditComponent},
  {path: "info/:id", component: TaskInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
