import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorsComponent } from './addauthors/addauthors.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AuthGuard } from './auth.guard';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { DeleteAuthorsComponent } from './delete-authors/delete-authors.component';
import { DeleteBooksComponent } from './delete-books/delete-books.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'books', canActivate:[AuthGuard], component: BooksComponent},
  {path:'author', canActivate:[AuthGuard], component: AuthorComponent},
  {path:'authors', canActivate:[AuthGuard], component: AuthorsComponent},
  {path:"book",  canActivate:[AuthGuard], component: BookComponent},
  {path:"edit-books", component: EditBooksComponent},
  {path:"edit-authors", component: EditAuthorsComponent},
  {path:'delete-books', component: DeleteBooksComponent},
  {path:'delete-authors', component: DeleteAuthorsComponent},
  {path:'addbooks', canActivate:[AuthGuard], component: AddbooksComponent},
  {path:'addauthors', canActivate:[AuthGuard],component: AddauthorsComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
