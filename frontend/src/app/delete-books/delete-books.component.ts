import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { MainDataServiceService } from '../main-data-service.service';

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrls: ['./delete-books.component.css']
})
export class DeleteBooksComponent implements OnInit {

  constructor(private bookService: MainDataServiceService, private router : Router) { }
  title : String = "Delete Book";
  book = new BookModel('','','','','');
  ngOnInit(): void {
  }
  DeleteBook(){ 
    this.bookService.deleteBook(this.book);
    //alert('Success');
    this.router.navigate(['/books']);
  }
}
