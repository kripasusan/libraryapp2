import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { MainDataServiceService } from '../main-data-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: MainDataServiceService, private router : Router) { }
  title : String = "Book";
  book = new BookModel('','','','','');
  ngOnInit(): void {
    let rbookId = localStorage.getItem('readBookId');
    this.bookService.getBook(rbookId).subscribe((data) => {
      this.book = JSON.parse(JSON.stringify(data));
    })
    
  
  }

}
