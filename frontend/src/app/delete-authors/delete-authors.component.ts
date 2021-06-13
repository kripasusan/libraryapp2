import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { MainDataServiceService } from '../main-data-service.service';

@Component({
  selector: 'app-delete-authors',
  templateUrl: './delete-authors.component.html',
  styleUrls: ['./delete-authors.component.css']
})
export class DeleteAuthorsComponent implements OnInit {

  constructor(private authorService: MainDataServiceService, private router : Router) { }
  title : String = "Delete Author";
  author = new AuthorModel('','','','','');
  ngOnInit(): void {
  }
  DeleteAuthor(){ 
    this.authorService.deleteAuthor(this.author);
    //alert('Success');
    this.router.navigate(['/authors']);
  }
}
