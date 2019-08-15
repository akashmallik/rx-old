import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface Patient {
  id: number;
  name: string;
  phone: number;
  email: string;
  address: string;
  sex: string;
  age: number;
  blood_group: string;
  avatar: string;
}
export interface Sex {
  key: string;
  value: string;
}
export interface Blood {
  key: string;
  value: string;
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patient: Patient[] = [];
  id: any;

  sex: Sex[] = [
    { key: 'Male', value: 'Male'},
    { key: 'Female', value: 'Female'},
    { key: 'Others', value: 'Others'},
  ];
  blood: Blood[] = [
    { key: 'A+', value: 'A+'},
    { key: 'A-', value: 'A-'},
    { key: 'B+', value: 'B+'},
    { key: 'B-', value: 'B-'},
    { key: 'AB+', value: 'AB+'},
    { key: 'AB-', value: 'AB-'},
    { key: 'O+', value: 'O+'},
    { key: 'O-', value: 'O-'},
  ];

  constructor(
    private patientService: PatientService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute ) {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      if (this.id !== null) {
        this.patientService.get(this.id)
        .subscribe(
          (data: Patient[]) => {
            this.patient = data;
          }
        );
      }
    }

  ngOnInit() {
  }

  save(value) {
    const formData: FormData = new FormData();
    formData.append('name', value.name);
    formData.append('age', value.age);
    formData.append('sex', value.sex);
    formData.append('blood_group', value.blood_group);
    formData.append('phone', value.phone);
    formData.append('email', value.email);
    formData.append('address', value.address);
    // formData.append('avatar', this.fileToUpload, this.fileToUpload.name);

    if (this.id) {
      this.patientService.update(this.id, formData)
      .subscribe(
        response => {
          this.toastr.success('Successfully Updated', 'Success');
        },
        error => {
          console.log(error.error);
        }
      );
    } else {
      this.patientService.create(formData)
      .subscribe(
        response => {
          this.toastr.success('Successfully Added', 'Success');
        },
        error => {
          console.log(error.error);
        }
      );
    }
    this.router.navigate(['/']);
  }
}

