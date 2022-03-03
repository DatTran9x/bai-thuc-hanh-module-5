import {Component, OnInit} from '@angular/core';
import {BookServiceService} from "../../../service/book-service.service";
import {Book} from "../../../model/book";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  book!: Book;

  constructor(private service: BookServiceService) {
  }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    // @ts-ignore
    let id: string = localStorage.getItem('id');
    this.service.findById(id).subscribe((data) => {
      this.book = data;
    })
  }

  getId(id: string): void {
    localStorage.setItem('id', id);
  }
}
