import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BookServiceService} from 'src/service/book-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm!: FormGroup;

  constructor(private service: BookServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      id: new FormControl("0"),
      title: new FormControl(""),
      author: new FormControl(""),
      description: new FormControl("")
    })
  }

  create():void{
    if(confirm("Do you sure want to add new book?")){
      this.service.create(this.createForm.value).subscribe(()=>{
        this.router.navigate([""]).then(()=>{
          alert("Success!");
        })
      })
    }
  }
}
