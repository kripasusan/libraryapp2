import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { MainDataServiceService } from '../main-data-service.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  constructor(private dataServiceObj: MainDataServiceService, private router : Router) {}
  title : String = "Add Books";
  book = new BookModel('','','','', '');
  ngOnInit(): void {
  }

  AddBook(){
    this.dataServiceObj.newBook(this.book);
    // alert("Success!");
    this.router.navigate(['books']);
  }
}
