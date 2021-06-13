import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorModel } from '../authors/author.model';
import { MainDataServiceService } from '../main-data-service.service';


@Component({
  selector: 'app-addauthors',
  templateUrl: './addauthors.component.html',
  styleUrls: ['./addauthors.component.css']
})
export class AddauthorsComponent implements OnInit {
  title: String = "Add Authors";

  constructor(private authorService : MainDataServiceService, private router: Router, private authService: AuthService) {}
  author = new AuthorModel('','','','','');
  ngOnInit(): void {
  }

  AddAuthor(){
    this.authorService.newAuthor(this.author);
    // alert("Success!");
    this.router.navigate(['/authors']);
  }

}
