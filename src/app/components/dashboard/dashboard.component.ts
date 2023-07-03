import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Students } from 'src/app/model/students';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentDetails : FormGroup;
  studentObj : Students = new Students();
  studentList : Students[] = [];
  deleteIndex: number;

  constructor( private formBuilder:FormBuilder,private studentService : StudentsService ) { }

  ngOnInit(): void {

    this.getAllStudent();

    this.studentDetails=this.formBuilder.group({
      id : [{value: '', disabled: true},Validators.required],
      name : [''],
      age : [''],
      class : ['']
    })
  }
  addStudent(){

    console.log(this.studentDetails);
    this.studentObj.id = this.studentDetails.value.id;
    this.studentObj.name = this.studentDetails.value.name;
    this.studentObj.age = this.studentDetails.value.age;
    this.studentObj.class = this.studentDetails.value.class;

    this.studentService.addStudents(this.studentObj)
    this.getAllStudent()
  }


  getAllStudent(){
    this.studentList =  this.studentService.getAllStudent()
  }

  editStudent(student : Students) {
    this.studentDetails.patchValue({
      id:student.id,
      name:student.name,
      age:student.age,
      class:student.class
    })
  }

  deleteItem(index:number){
    this.deleteIndex = index
  }

  deleteItemConfirem(){
    this.studentService.deleteStudentAtIndex(this.deleteIndex)
  }

  updateStudent(){
      this.studentService.updateStudent(this.studentDetails.getRawValue())

  }
}