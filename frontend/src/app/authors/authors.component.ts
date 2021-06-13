import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from './author.model';
import { MainDataServiceService } from '../main-data-service.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title : String = "Authors";
  imageWidth: number = 70;
  imageMargin: number = 3;

  adata : AuthorModel[] = [];

  constructor(private authorService: MainDataServiceService, private router : Router) { }

  ngOnInit(): void {
    this.authorService.getAuthorData()
    .subscribe((data)=>{
      this.adata = JSON.parse(JSON.stringify(data));
    })
  }

  DeleteAuthor(author:any){
    this.authorService.deleteAuthor(author._id.toString()).subscribe(res =>{
      this.authorService.getAuthorData().subscribe((data)=>{
        this.adata=JSON.parse(JSON.stringify(data));
      })
    })
  }

  EditAuthor(author:any){
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['/edit-authors']);
  }

  ReadAuthor(author:any){
    localStorage.setItem("readAuthorId", author._id.toString());
    this.router.navigate(['/author']);
  }
}
