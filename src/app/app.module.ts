import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { ShowDeleteComponent } from './languages/show-delete/show-delete.component';
import { AddEditComponent } from './languages/add-edit/add-edit.component';
import { StudentComponent } from './student/student.component';
import { ShowDeleteStudentComponent } from './student/show-delete-student/show-delete-student.component';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';
import { PostService} from './post.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    ShowDeleteComponent,
    AddEditComponent,
    StudentComponent,
    ShowDeleteStudentComponent,
    AddEditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
