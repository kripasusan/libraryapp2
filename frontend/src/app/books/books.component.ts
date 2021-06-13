import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BookModel} from './book.model';
import { MainDataServiceService } from '../main-data-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String="Books";
  imageWidth:Number = 70;
  imageMargin:Number = 3;

  bdata : BookModel[] = [];

  constructor(private bookService : MainDataServiceService,private router : Router, public authService : AuthService) { }

  ngOnInit(): void {
    this.bookService.getBookData()
   .subscribe((data)=>{
      this.bdata = JSON.parse(JSON.stringify(data));
   })
  }

  DeleteBook(book:any){
    this.bookService.deleteBook(book._id.toString()).subscribe(res =>{
      this.bookService.getBookData().subscribe((data)=>{
        this.bdata=JSON.parse(JSON.stringify(data));
      })
    })
  }

  EditBook(book:any){
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['/edit-books']);
  }

  ReadBook(book:any){
    localStorage.setItem("readBookId", book._id.toString());
    this.router.navigate(['/book']);
  }

}