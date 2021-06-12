import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { MainDataServiceService } from '../main-data-service.service';


@Component({
  selector: 'app-addauthors',
  templateUrl: './addauthors.component.html',
  styleUrls: ['./addauthors.component.css']
})
export class AddauthorsComponent implements OnInit {

  constructor(private authorService : MainDataServiceService, private router: Router) {}
  title: String = "Add Authors";
  author = new AuthorModel('','','','','');
  ngOnInit(): void {
  }

  AddAuthor(){
    this.authorService.newAuthor(this.author);
    // alert("Success!");
    this.router.navigate(['authors']);
  }

}
