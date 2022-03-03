import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Book } from 'src/model/book';
import { BookServiceService } from 'src/service/book-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book!:Book;
  editForm!:FormGroup;

  constructor(private service:BookServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    let id = localStorage.getItem('id');
    // @ts-ignore
    this.service.findById(id).subscribe((data)=>{
      this.book = data;
      this.editForm = new FormGroup({
        id: new FormControl(this.book.id),
        title: new FormControl(this.book.title),
        author: new FormControl(this.book.author),
        description: new FormControl(this.book.description)
      })
    })
  }

  edit(): void {
    if(confirm("Do you sure want to update this book?")){
      this.service.update(this.editForm.value).subscribe(()=>{
        this.router.navigate([""]).then(()=>{
          alert("Success!");
        })
      })
    }
  }
}
