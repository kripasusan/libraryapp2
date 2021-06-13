import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { MainDataServiceService } from '../main-data-service.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {
  title : String = "Edit Book";

  constructor(private bookService: MainDataServiceService, private router : Router){}
  book = new BookModel('','','','','');

  ngOnInit(): void {
    let bookId = localStorage.getItem('editBookId');
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
    })
  }
  EditBook(){    
    this.bookService.editBook(this.book);   
    //alert("Success");
    this.router.navigate(['/books']);
  }
  CancelUpdate(){    
    this.router.navigate(['/books']);
  }
 

}
