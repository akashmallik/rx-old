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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'phone', 'address', 'action'];
  dataSource: MatTableDataSource<Patient>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private patientService: PatientService,
    private toastr: ToastrService) {}

  ngOnInit() {
    this.patientService.getAll()
    .subscribe(
      (response: Patient[]) => {
        this.dataSource = new MatTableDataSource<Patient>(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource._updateChangeSubscription();
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(item) {
    const index = this.dataSource.data.indexOf(item);
    this.patientService.delete(item.id)
    .subscribe(
      data => {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
        this.toastr.success('Successfully Deleted', 'Success');
      }
    );
  }

}
