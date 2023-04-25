import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      // In a FormGroup we pass an object{}
      // We  specify the form controls as a key value pair eg firstname 
      personalData:new FormGroup({
        firstname: new FormControl(null,[Validators.required, this.noSpaceAllowed]),
        lastname: new FormControl(null,[Validators.required, this.noSpaceAllowed]),
        email: new FormControl(null,[Validators.required, Validators.email]),
      }),
      gender: new FormControl('other'),
      hobbies: new FormControl(''),
      country: new FormControl('Kenya'),
      // In a form aray we pass an array[]
      // we specify elements
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }
  // deleting a skill
  deleteSkill(i: number) {
    (<FormArray>this.reactiveForm.get('skills')).removeAt(i);
  }
  
  // Adding a new skill
  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  noSpaceAllowed(control: FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed: true}
    }
    return null;
  }
}
