import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AddauthorsComponent } from './addauthors/addauthors.component';
import { DeleteBooksComponent } from './delete-books/delete-books.component';
import { DeleteAuthorsComponent } from './delete-authors/delete-authors.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { EditAuthorsComponent } from './edit-authors/edit-authors.component';
import { FormsModule } from '@angular/forms';
import { MainDataServiceService } from './main-data-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookComponent,
    BooksComponent,
    AuthorComponent,
    AuthorsComponent,
    AddbooksComponent,
    AddauthorsComponent,
    DeleteBooksComponent,
    DeleteAuthorsComponent,
    LoginComponent,
    SignupComponent,
    EditBooksComponent,
    EditAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MainDataServiceService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
