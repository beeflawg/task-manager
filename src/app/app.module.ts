import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { NavComponent } from './components/nav/nav.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskInfoComponent } from './components/task-info/task-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    NavComponent,
    TaskEditComponent,
    TaskInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
