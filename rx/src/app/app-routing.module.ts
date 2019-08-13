import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { SinglePatientComponent } from './single-patient/single-patient.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patients/edit/:id', component: PatientComponent },
  { path: 'patients/:id', component: SinglePatientComponent },
  { path: 'patients', component: PatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
