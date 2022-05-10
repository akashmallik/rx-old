import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../model/patient';

export interface Sex {
  key: string;
  value: string;
}

export interface Blood {
  key: string;
  value: string;
}

class PatientData {
  id: number;
  name: string;
  phone: number;
  email: string;
  address: string;
  sex: string;
  age: number;
  blood_group: string;
  avatar: string;
};

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  private selectedFile = null;
  patientId: number;
  patient: Patient = new PatientData()

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
      this.patientId = +this.route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.patientService.get(this.patientId)
    .subscribe(
      (data: Patient) => {
        this.patient = data;
      }
    )
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
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
    if (this.selectedFile) {
      formData.append('avatar', this.selectedFile, this.selectedFile.name);
    }

    if (this.patientId) {
      this.patientService.update(this.patientId, formData)
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

