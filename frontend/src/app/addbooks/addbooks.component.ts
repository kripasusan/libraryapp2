import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookModel } from '../books/book.model';
import { MainDataServiceService } from '../main-data-service.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  title : String = "Add Books";

  constructor(private dataServiceObj: MainDataServiceService, private router : Router, private _authService: AuthService) {}
  book = new BookModel('','','','', '');
  ngOnInit(): void {
  }

  AddBook(){
    this.dataServiceObj.newBook(this.book);
    // alert("Success!");
    this.router.navigate(['/books']);
  }
}
