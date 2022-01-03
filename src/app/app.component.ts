import { Component, Input, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { NewserviceService } from './newservice.service';
import { FormGroup, FormControl, FormArray, FormBuilder, NgForm, Validators, ReactiveFormsModule} from '@angular/forms';
import { BookService } from './book.service';
import {Book} from './book';
import { Observable } from 'rxjs/Observable';
import { CreateDialogBoxComponent } from './create-dialog-box/create-dialog-box.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
  providers: [NewserviceService]
})
export class AppComponent {
  title = 'ABC Project';
  [x: string]: any;
  softData: Observable<Book[]>;
  datasaved= false;
  dataForm: FormGroup;
  DataidToUpdate = null;
  user="Admin";
constructor(private formbuilder:FormBuilder,private bookservice: BookService){}
ngOnInit(){
  this.dataForm=this.formbuilder.group({
    name: ['',[Validators.required]],
    project:['',[Validators.required]],
    comments:['',[Validators.required]]
  });

  this.getData();
}
datatoedit(dataid:string){
  this.bookservice.getbookbyid(dataid).subscribe(data=>{
    this.DataidToUpdate=dataid;
    this.dataForm.controls['name'].setValue(data.name);
    this.dataForm.controls['project'].setValue(data.project);
    this.dataForm.controls['comments'].setValue(data.comments);
  });
}
getData()
{
  this.softData=this.bookservice.getDataFromStore();
}
openDialog(): void {
  const dialogRef = this.dialog.open(CreateDialogBoxComponent, {
    width: '250px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

OnFormSubmit(){
  this.datasaved=false;
  let data=this.dataForm.value;
  this.createData(data);
  this.dataForm.reset();
}
createData(data:Book){
  if(this.DataidToUpdate==null){
  this.bookservice.createData(data)
  .subscribe(
    book=>{
      this.datasaved=true;
      this.getData();
      this.DataidToUpdate=null;
    }
  );
}

else{
  data.id=this.DataidToUpdate;
  this.bookservice.updateData(data).subscribe(data=>{
    this.datasaved=true;
    this.getData();
    this.DataidToUpdate=null;
  });
}
}
dataDelete(dataid:String){
  this.bookservice.DeleteData(dataid).subscribe(book=>{
    this.getData();
  });
}
}
