import { Component, OnInit } from '@angular/core';
import { Book } from 'src/model/book';
import {BookServiceService} from "../../../service/book-service.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  list!: Book[];

  constructor(private service:BookServiceService) { }

  ngOnInit(): void {
    this.findAll();
    console.log(this.list);
  }

  findAll(): void {
    this.service.findAll().subscribe((data)=>{
      this.list = data;
    });
  }

  getId(id:string):void{
    localStorage.setItem("id",id);
  }
}
