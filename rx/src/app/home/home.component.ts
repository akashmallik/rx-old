import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PatientService } from '../services/patient.service';
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
let ELEMENTDATA: Patient[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private toastr: ToastrService) {
    this.patientService.getAll()
    .subscribe(
      (data: Patient[]) => {
        ELEMENTDATA = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'age', 'phone', 'address', 'action'];
  dataSource = new MatTableDataSource<Patient>(ELEMENTDATA);

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id) {
    this.patientService.delete(id)
    .subscribe(
      data => {
        this.toastr.success('Successfully Deleted', 'Success');
      }
    );
  }

}
