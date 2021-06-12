import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel} from '../authors/author.model';
import { MainDataServiceService } from '../main-data-service.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private authorService: MainDataServiceService, private router : Router) { }
  title: String = "Author";
  author = new AuthorModel('','','','','');
  ngOnInit(): void {
    let rauthorId = localStorage.getItem('readAuthorId');
    this.authorService.getAuthor(rauthorId).subscribe((data) => {
      this.author = JSON.parse(JSON.stringify(data));
    })
  }

}
