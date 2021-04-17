import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/post.service'

@Component({
  selector: 'app-show-delete-student',
  templateUrl: './show-delete-student.component.html',
  styleUrls: ['./show-delete-student.component.css']
})
export class ShowDeleteStudentComponent implements OnInit {

  constructor(private service:PostService) { }

  StudentList:any=[];


  ngOnInit(): void {
    this.refreshStudent();
  }
  refreshStudent(){
    this.service.getStudentList().subscribe(data=>{
      this.StudentList=data;
    });
  }

}
