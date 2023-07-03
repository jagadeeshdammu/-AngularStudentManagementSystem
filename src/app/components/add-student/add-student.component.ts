import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Students } from 'src/app/model/students';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentDetails : FormGroup;
  studentObj : Students = new Students();
  constructor(private formBuilder:FormBuilder,private studentService : StudentsService,private router: Router) { }

  ngOnInit(): void {
    this.studentDetails=this.formBuilder.group({
      id : ['',Validators.required],
      name : ['',Validators.required],
      age : ['',Validators.required],
      class : ['',Validators.required]
    })
  }

  addStudent(){
    if(this.studentService.isExist(this.studentDetails.value.id)){
      return
    }
    
    this.studentObj.id = this.studentDetails.value.id;
    this.studentObj.name = this.studentDetails.value.name;
    this.studentObj.age = this.studentDetails.value.age;
    this.studentObj.class = this.studentDetails.value.class;
    this.studentService.addStudents(this.studentObj)
    this.router.navigate(['/students']);
  }

}
