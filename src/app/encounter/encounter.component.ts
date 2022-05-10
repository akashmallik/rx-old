import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { AdviceService } from '../services/advice.service';
import { EncounterService } from '../services/encounter.service';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from '../services/medicine.service';
import { ExaminationService } from '../services/examination.service';
import { SymptomService } from '../services/symptom.service';
import { DatePipe } from '@angular/common';
import { DrugService } from '../services/drug.service';
import { PowerService } from '../services/power.service';
import { Patient } from '../model/patient';


// export interface PatientMeta {
//   id: number;
//   name: string;
//   phone: number;
//   email: string;
//   address: string;
//   sex: string;
//   age: number;
//   blood_group: string;
//   avatar: string;
// }

export interface SymptomMeta {
  id: number;
  symptom: string;
  // encounter: number;
}

export interface ExaminationMeta {
  encounter?: string;
  id?: string;
  pulse?: number;
  bp?: string;
  temp?: number;
  resp_rate?: number;
  height?: number;
  lifestyle?: string;
}

export interface Visit {
  key: string;
  value: string;
}

export interface MedicineMeta {
  id: number;
  name: string;
  type: number;
}

export interface PowerMeta {
  id: number;
  value: string;
  type: number;
}

export interface DrugMeta {
  id: number;
  medicine: MedicineMeta;
  power: PowerMeta;
  dosage: string;
  instruction: string;
}

export interface AdviceMeta {
  id: string;
  advice: string;
}

export interface EncounterMeta {
  id: number;
  patient: Patient; 
  visit_type: Visit;
  date: Date;
  symptoms: SymptomMeta;
  examination: ExaminationMeta;
  drugs: DrugMeta;
  advices: AdviceMeta;
}

class Encounter {
  id = null;
  patient = null; 
  visit_type = null;
  date = null;
  symptoms = null;
  examination = null;
  drugs = null;
  advices = null;
}

class Symptom {
  id: null;
  symptom: null;
}

class Examination {
  encounter = null;
  id = null;
  pulse = null;
  bp = null;
  temp = null;
  resp_rate = null;
  height = null;
  lifestyle = null;
}

class Drug {
  id = null;
  medicine = null;
  power = null;
  dosage = null;
  instruction = null;
}

class Advice {
  id: null 
  advice: null
}

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {
  @ViewChild('print', { read: ElementRef, static: false }) print: ElementRef;

  patientId: number;
  encounterId: number;

  patient: Patient;

  encount: EncounterMeta = new Encounter();
  encounters: EncounterMeta[] = [];

  selectedSymptom: SymptomMeta = new Symptom();
  symptoms: SymptomMeta[] = [];
  
  examination: ExaminationMeta = new Examination();

  medicines: MedicineMeta[] = [];
  powers: PowerMeta[] = [];
  selctedDrug: DrugMeta = new Drug();
  drugs: DrugMeta[] = [];

  selectedAdvice: AdviceMeta = new Advice();
  advices: AdviceMeta[] = [];
  

  visit: Visit[] = [
    { key: 'ODP', value: 'ODP'},
  ];
  displayedColumns: string[] = ['position'];
  constructor(
    private patientService: PatientService,
    private adviceService: AdviceService,
    private encounterService: EncounterService,
    private medicineService: MedicineService,
    private powerService: PowerService,
    private drugService: DrugService,
    private examinationService: ExaminationService,
    private symptomService: SymptomService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    public datepipe: DatePipe) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patientId = params['pid'];
      this.encounterId = params['eid'];
      this.fatchAll();
    })
  }

  fatchAll() {
    this.patientService.get(this.patientId)
    .subscribe(
      (response: Patient) => {
        this.patient = response;
        this.encounters = response['encounters'];
      }
    );

    this.encounterService.get(this.encounterId)
    .subscribe(
      (response: EncounterMeta[]) => {
        console.log(response);
        this.symptoms = response["symptoms"]
        const examination = response["examination"];
        if (examination) {
          this.examination = examination;
        } else {
          this.examination = new Examination();
        }
        this.drugs = response["drugs"];
        this.advices = response["advices"];
      }
    );

    this.medicineService.getAll()
    .subscribe(
      (response: MedicineMeta[]) => {
        this.medicines = response;
      }
    );
    this.powerService.getAll()
    .subscribe(
      (response: PowerMeta[]) => {
        this.powers = response;
      }
    );
  }

  encounter(data) {
    const formData: FormData = new FormData();
    formData.append('date', this.datepipe.transform(data.date, 'yyyy-MM-dd'));
    formData.append('visit_type', data.visit_type);
    formData.append('patient', this.patientId.toString());
    this.encounterService.create(formData)
    .subscribe(
      (response: EncounterMeta) => {
        this.encounters.splice(this.encounters.length, 0 , response);
        this.toastr.success('Successfully Added', 'Success');
      }
    );
  }

  addDrug(payload) {
    const formData: FormData = new FormData();
    formData.append('medicine', payload.medicine);
    formData.append('power', payload.power);
    formData.append('dosage', payload.dosage);
    formData.append('instruction', payload.instruction);
    formData.append('encounter', this.encounterId.toString());

    const drugId = payload.id;
    if (drugId) {
      formData.append('id', drugId);
      const index = this.drugs.map(drug => drug.id).indexOf(drugId);
      
      this.drugService.update(drugId, formData)
      .subscribe(
        (response: any) => {
          this.drugs.splice(index, 1, response);
          this.toastr.success('Successfully Updated', 'Success');
        }
      );
    } else {
      this.drugService.create(formData)
      .subscribe(
        (response: any) => {
          this.drugs.splice(this.drugs.length, 0 , response);
          this.toastr.success('Successfully Added', 'Success');
        }
      );
    }
  }

  editDrug(drugId) {
    this.drugService.get(drugId)
    .subscribe(
      (response: DrugMeta) => {
        this.selctedDrug = response;
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to Update', 'Error');
      }
    );
  }

  deleteDrug(item) {
    const index = this.drugs.indexOf(item);

    this.drugService.delete(item.id)
    .subscribe(
      response => {
        this.drugs.splice(index, 1);
        this.toastr.success('Successfully Deleted', 'Success');
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to Delete', 'Error');
      }
    );
  }

  report(payload)  {
    const formData: FormData = new FormData();
    formData.append('pulse', payload.pulse);
    formData.append('bp', payload.bp);
    formData.append('temp', payload.temp);
    formData.append('resp_rate', payload.resp_rate);
    formData.append('height', payload.height);
    formData.append('lifestyle', payload.lifestyle);
    formData.append('encounter', this.encounterId.toString());  // TODO: Imporve

    const examination_encounter = payload.encounter
    if (examination_encounter) {
      formData.append('encounter', examination_encounter);
      this.examinationService.update(examination_encounter, formData)
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

  addSymptom(payload) {
    const formData: FormData = new FormData();
    formData.append('symptom', payload.symptom);
    formData.append('encounter', this.encounterId.toString());

    const symptomId = payload.id;
    if (symptomId) {
      formData.append('id', symptomId);
      const index = this.symptoms.map(symptom => symptom.id).indexOf(symptomId);
      
      this.symptomService.update(symptomId, formData)
      .subscribe(
        (response: SymptomMeta) => {
          this.symptoms.splice(index, 1, response);
          this.toastr.success('Successfully Updated', 'Success');
        }
      );
    } else {
      this.symptomService.create(formData)
      .subscribe(
        (response: SymptomMeta) => {
          this.symptoms.splice(this.symptoms.length, 0 , response);
          this.toastr.success('Successfully Added', 'Success');
        }
      );
    }
  }

  editSymptom(symptomId) {
    this.symptomService.get(symptomId)
    .subscribe(
      (response: SymptomMeta) => {
        this.selectedSymptom = response;
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to Update', 'Error');
      }
    );
  }

  deleteSymptom(item) {
    const index = this.symptoms.indexOf(item);
    
    this.symptomService.delete(item.id)
    .subscribe(
      (response: SymptomMeta) => {
        this.symptoms.splice(index, 1);
        this.toastr.success('Successfully Deleted', 'Success');
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to Delete', 'Error');
      }
    );
  }

  addAdvice(payload) {
    const formData: FormData = new FormData();
    formData.append('encounter', this.encounterId.toString());
    formData.append('advice', payload.advice);

    const adviceId = payload.id;
    if (adviceId) {
      formData.append('id', adviceId);
      const index = this.advices.map(advice => advice.id).indexOf(adviceId);
      
      this.adviceService.update(adviceId, formData)
      .subscribe(
        (response: AdviceMeta) => {
          this.advices.splice(index, 1, response);
          this.toastr.success('Successfully Updated', 'Success');
        }
      );
    } else {
      this.adviceService.create(formData)
      .subscribe(
        (response: AdviceMeta) => {
          this.advices.splice(this.advices.length, 0 , response);
          this.toastr.success('Successfully Added', 'Success');
        }
      );
    }
  }

  editAdvice(adviceId) {
    this.adviceService.get(adviceId)
    .subscribe(
      (response: AdviceMeta) => {
        this.selectedAdvice = response;
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to Update', 'Error');
      }
    );
  }

  deleteAdvice(item) {
    const index = this.advices.indexOf(item);

    this.adviceService.delete(item.id)
    .subscribe(
      response => {
        this.advices.splice(index, 1);
        this.toastr.success('Successfully Deleted', 'Success');
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to Delete', 'Error');
      }
    );
  }

  isEmptyObject(obj) {
    return obj.length !== undefined;
    // return (obj && (Object.keys(obj).length === 0));
  }

  printPage() {
    window.print();
  }
}
