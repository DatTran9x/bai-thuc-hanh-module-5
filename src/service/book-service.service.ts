import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }

  findAll():Observable<any>{
    return this.http.get("http://localhost:3000/books");
  }

  findById(id:string):Observable<any>{
    return this.http.get("http://localhost:3000/books/"+id);
  }

  create(book:Book):Observable<any>{
    return this.http.post("http://localhost:3000/books",book);
  }

  update(book:Book):Observable<any>{
    return this.http.put("http://localhost:3000/books/"+book.id,book);
  }

  delete(id:string):Observable<any>{
    return this.http.delete("http://localhost:3000/books/"+id);
  }
}
