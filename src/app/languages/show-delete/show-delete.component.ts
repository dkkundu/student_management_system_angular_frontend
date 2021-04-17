import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/post.service'

@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent implements OnInit {

  constructor(private service:PostService) { }

  LanguagesList:any=[];

  ngOnInit(): void {
    this.refreshLingagusList();
  }

  refreshLingagusList(){
    this.service.getlanguagesList().subscribe(data=>{
      this.LanguagesList=data;

    });
  }

}
