import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/model/book';
import { BookServiceService } from 'src/service/book-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  book!:Book;

  constructor(private service:BookServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook():void{
    let id = localStorage.getItem('id');
    // @ts-ignore
    this.service.findById(id).subscribe((data)=>{
      this.book = data;
    })
  }

  delete(id:string):void{
    if(confirm("Do you sure want to delete this book?")){
      this.service.delete(id).subscribe(()=>{
        this.router.navigate([""]).then(()=>{
          alert("Success!");
        })
      })
    }
  }
}
