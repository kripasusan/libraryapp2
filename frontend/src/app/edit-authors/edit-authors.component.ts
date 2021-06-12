import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { MainDataServiceService} from '../main-data-service.service';


@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.css']
})
export class EditAuthorsComponent implements OnInit {
  constructor(private authorService: MainDataServiceService, private router : Router) { }
  title : String = "Edit Author";
  author = new AuthorModel('','','','','');

  ngOnInit(): void {
    let authorId = localStorage.getItem('editAuthorId');
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.author = JSON.parse(JSON.stringify(data));
    })
  }
  EditAuthor(){
    this.authorService.editAuthor(this.author);
    this.router.navigate(['authors']);
  }

  CancelUpdate(){    
    this.router.navigate(['authors']);
  }

}

