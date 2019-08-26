import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { AdviceService } from '../services/advice.service';
import { EncounterService } from '../services/encounter.service';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from '../services/medicine.service';
import { ExaminationService } from '../services/examination.service';
import { SymptomService } from '../services/symptom.service';

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
export interface Examination {
  id: string;
  pulse: number;
  bp: string;
  temp: number;
  resp_rate: number;
  height: number;
  lifestyle: string;
  patient: string;
}

export interface Visit {
  key: string;
  value: string;
}

@Component({
  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.scss']
})
export class SinglePatientComponent implements OnInit {
  @ViewChild('print', { read: ElementRef, static: false }) print: ElementRef;
  patient: Patient[] = [];
  advic: any[] = [];
  advices: any[] = [];
  encounters: any[] = [];
  symp: any[] = [];
  symptoms: any[] = [];
  examination: any[] = [];
  encount: any[] = [];
  medicines: any[] = [];
  id: number;
  encounterId: any;

  visit: Visit[] = [
    { key: 'ODP', value: 'ODP'},
  ];
  displayedColumns: string[] = ['position'];
  constructor(
    private patientService: PatientService,
    private adviceService: AdviceService,
    private encounterService: EncounterService,
    private medicineService: MedicineService,
    private examinationService: ExaminationService,
    private symptomService: SymptomService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
      route.queryParamMap.subscribe(
        params => {
          this.encounterId = params.get('encounter');
          if (this.encounterId) {
            this.encounterService.get(this.encounterId)
            .subscribe(
              (data: any[]) => {
                this.encount =  data;
              }
            );
          }
        }
      );
      this.id = +this.route.snapshot.paramMap.get('id');
      this.patientService.get(this.id)
      .subscribe(
        (data: Patient[]) => {
          this.patient = data;
        }
      );
    }

  ngOnInit() {
    this.adviceService.getAll()
    .subscribe(
      (data: any[]) => {
        this.advices = data.filter(p => p.patient === this.id);
      }
    );
    this.symptomService.getAll()
    .subscribe(
      (data: any[]) => {
        this.symptoms = data.filter(p => p.patient === this.id);
      }
    );
    this.examinationService.getAll()
    .subscribe(
      (data: any[]) => {
        const filtered = data.find(p => p.patient === this.id);
        if (filtered) {
          this.examination = filtered;
        }
      }
    );
    this.encounterService.getAll()
    .subscribe(
      (data: any[]) => {
        this.encounters = data.filter(p => p.patient === this.id);
      }
    );
    this.medicineService.getAll()
    .subscribe(
      (data: any[]) => {
        this.medicines = data;
      }
    );
  }

  encounter(data) {
    const formData: FormData = new FormData();
    formData.append('date', data.date);
    formData.append('visit_type', data.visit_type);
    formData.append('patient', this.id.toString());
    this.encounterService.create(formData)
    .subscribe(
      response => {
        this.encounters.splice(this.encounters.length, 0 , response);
        this.toastr.success('Successfully Added', 'Success');
      }
    );
  }

  medicine(data) {
    const formData: FormData = new FormData();

    formData.append('medicines', data.medicine);
    formData.append('patient', this.id.toString());
    formData.append('id', this.encounterId);

    this.encounterService.update(this.encounterId, data)
    .subscribe(
      (response: any) => {
        this.toastr.success('Successfully Added', 'Success');
      }
    );
  }

  report(value)  {
    const formData: FormData = new FormData();
    formData.append('pulse', value.pulse);
    formData.append('bp', value.bp);
    formData.append('temp', value.temp);
    formData.append('resp_rate', value.resp_rate);
    formData.append('height', value.height);
    formData.append('lifestyle', value.lifestyle);
    formData.append('patient', this.id.toString());
    if (value.id) {
      formData.append('id', value.id);
      this.examinationService.update(value.id, formData)
      .subscribe(
        (response: any) => {
          this.examination = response;
          this.toastr.success('Successfully Updated', 'Success');
        }
      );
    } else {
      this.examinationService.create(formData)
      .subscribe(
        (response: any) => {
          this.examination = response;
          this.toastr.success('Successfully Added', 'Success');
        }
      );
    }
  }

  symptom(data) {
    const index = this.symptoms.indexOf(data);
    const formData: FormData = new FormData();
    formData.append('symptom', data.symptom);
    formData.append('patient', this.id.toString());
    if (data.id) {
      formData.append('id', data.id);
      this.symptomService.update(data.id, formData)
      .subscribe(
        (response: any) => {
          this.symptoms.splice(index, 1, response);
          this.toastr.success('Successfully Updated', 'Success');
        }
      );
    } else {

      this.symptomService.create(formData)
      .subscribe(
        (response: any) => {
          this.symptoms.splice(this.symptoms.length, 0 , response);
          this.toastr.success('Successfully Added', 'Success');
        }
      );
    }
  }

  sigleSymptom(item) {
    this.symptomService.get(item.id)
    .subscribe(
      (data: any[]) => {
        this.symp = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteSymptom(item) {
    const index = this.symptoms.indexOf(item);
    this.symptomService.delete(item.id)
    .subscribe(
      data => {
        this.symptoms.splice(index, 1);
        this.toastr.success('Successfully Deleted', 'Success');
      },
      error => {
        console.log(error);
      }
    );
  }

  advice(data) {
    const index = this.advices.indexOf(data);
    const formData: FormData = new FormData();
    formData.append('advice', data.advice);
    formData.append('patient', this.id.toString());
    if (data.id) {
      formData.append('id', data.id);
      this.adviceService.update(data.id, formData)
      .subscribe(
        (response: any) => {
          this.advices.splice(index, 1, response);
          this.toastr.success('Successfully Updated', 'Success');
        }
      );
    } else {
      this.adviceService.create(formData)
      .subscribe(
        response => {
          this.advices.splice(this.advices.length, 0 , response);
          this.toastr.success('Successfully Added', 'Success');
        }
      );
    }
  }

  singleAdvice(item) {
    this.adviceService.get(item.id)
    .subscribe(
      (data: any[]) => {
        this.advic = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteAdvice(item) {
    const index = this.advices.indexOf(item);
    this.adviceService.delete(item.id)
    .subscribe(
      data => {
        this.advices.splice(index, 1);
        this.toastr.success('Successfully Deleted', 'Success');
      },
      error => {
        console.log(error);
      }
    );
  }

  printPage() {
    window.print();
  }

}
