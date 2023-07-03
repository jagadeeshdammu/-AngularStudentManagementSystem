import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path:'students',component:DashboardComponent},
  {path:'add',component:AddStudentComponent},
  {path:'**',redirectTo:'students'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
