import { Injectable } from '@angular/core';
import { Students } from '../model/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentList = new Array<Students>();

  constructor() {
  }

  addStudents(student : Students){
    this.studentList.push(student)
  }

  getAllStudent() : Students[] {
    return this.studentList;

  }

  deleteStudentAtIndex(index:number){
     this.studentList.splice(index,1)
  }

  updateStudent(student:Students){
    let index = this.studentList.findIndex(this.findIndexToUpdate, student.id);
    this.studentList[index] = student;
  }

  isExist(id:number):Boolean{
    let updateItem = this.studentList.find(this.findIndexToUpdate, id);
    if(updateItem != null){
      return true
    }
    return false
  }

  findIndexToUpdate(newItem) { 
    return newItem.id === this;
}
}
