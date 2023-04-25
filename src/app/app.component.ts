import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-Reactive-Forms';
  reactiveForm: FormGroup;

  ngOnInit(){
    // First we are going to instantiate the FormGroup
    this.reactiveForm= new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('other'),
      hobbies: new FormControl(''),
      country: new FormControl('Kenya')
    });
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }
}
