import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Book} from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
bookUrl="/api/books";
  constructor(private http:HttpClient ) { }
  getbookbyid(bookid:string){
    return this.http.get<Book>(this.bookUrl+"/"+bookid);
  }

  createData(book:Book):Observable<Book>{
    let httpheaders= new HttpHeaders()
    .set('Content-Type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.post<Book>(this.bookUrl,book,options);
    
  }
  updateData(book:Book):Observable<number>{
    let httpheaders= new HttpHeaders()
    .set('Content-Type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.put<number>(this.bookUrl+"/"+book.id,book,options);

  }
  DeleteData(bookid:String):Observable<number>{
    let httpheaders= new HttpHeaders()
    .set('Content-Type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(this.bookUrl+"/"+bookid);

  }
getDataFromStore():Observable<Book[]>{
  return this.http.get<Book[]>(this.bookUrl);
}
}
