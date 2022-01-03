import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostListener } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyModule } from './company/company.module';
import { StudentComponent } from './student/student.component';
import { MypipePipe } from './mypipe.pipe';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {BookService} from './book.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {TestData} from './testdata';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CommonModule } from '@angular/common';
import { CreateDialogBoxComponent } from './create-dialog-box/create-dialog-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    MypipePipe,
    StudentdetailsComponent,
    PagenotfoundComponent,
    CreateDialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData),
    AngularFireDatabaseModule,
    BrowserAnimationsModule

  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppModule {
  constructor(){
    console.log("hi,this is module");
  }
 }
