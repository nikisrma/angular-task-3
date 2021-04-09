import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password.validator';
import { forbiddenNameValidator } from '../shared/user-name-validator';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm : FormGroup;
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: [null, [Validators.required,forbiddenNameValidator(/password/)]],
      lastName: ['',Validators.required],
      email : ['',[Validators.email,Validators.required,Validators.pattern]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      skills : this.fb.array([]),
    },{validator:passwordValidator});
  }
  
    
  
get email(){
  return this.profileForm && this.profileForm.get('email');
}

get skills():FormArray{
  return this.profileForm.get("skills") as FormArray;
}
newSkill():FormGroup{
  return this.fb.group({
    skill:'',
    exp:'',
  })
}
addSkill(){
  this.skills.push(this.newSkill());
}
removeSkill(i:number){
  this.skills.removeAt(i);
}
onSubmit(){
  console.log(this.profileForm.value);
}

}