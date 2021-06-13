import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainDataServiceService {

  constructor(public http: HttpClient) { }
  getBookData(){
    return this.http.get('http://localhost:3000/books');

  }
  getBook(id:any) {
    return this.http.get('http://localhost:3000/book/'+id);
  }
  getAuthor(id:any){
    return this.http.get('http://localhost:3000/author/'+id);
  }
  newBook(item:any){
    return this.http.post('http://localhost:3000/addbooks',{ book:item})
    .subscribe((data)=>{
      console.log(data);
    });
  }
  editBook(book:any)
  {
    return this.http.put("http://localhost:3000/edit-books", book)
    .subscribe((data) =>{console.log(data)
    });
  }
  editAuthor(author:any)
  {
    return this.http.put("http://localhost:3000/edit-authors", author)
    .subscribe((data) =>{console.log(data)
    });
  }
  deleteBook(id:any){
    return this.http.delete("http://localhost:3000/delete-books/"+id);
  }

  getAuthorData(){
    return this.http.get('http://localhost:3000/authors');

  }
  newAuthor(item:any){
    return this.http.post('http://localhost:3000/addauthors',{ author :item})
    .subscribe((data)=>{
      console.log(data);
    });
  }
  deleteAuthor(id:any){
    return this.http.delete("http://localhost:3000/delete-authors/"+id);
  }

}
