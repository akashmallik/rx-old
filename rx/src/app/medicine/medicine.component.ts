import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MedicineService } from '../services/medicine.service';
import { ToastrService } from 'ngx-toastr';
import { MatTable } from '@angular/material';

export interface Medicine {
  id: number;
  medicine: string;
}

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})

export class MedicineComponent implements OnInit {
  displayedColumns: string[] = ['medicine', 'action'];
  dataSource: MatTableDataSource<Medicine>;

  @ViewChild('myTable', {static: true}) myTable: MatTable<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private medicineService: MedicineService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.medicineService.getAll()
    .subscribe(
      (data: Medicine[]) => {
        this.dataSource = new MatTableDataSource<Medicine>(data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  medicine(data) {
    this.medicineService.create(data)
    .subscribe(
      response => {
        this.dataSource.data.push(data);
        // this.dataSource.data = this.dataSource.data.slice();
        // this.myTable.renderRows();
        this.dataSource._updateChangeSubscription();
        this.toastr.success('Successfully Added', 'Success');
      }
    );

  }

  delete(item) {
    const index = this.dataSource.data.indexOf(item);
    this.medicineService.delete(item.id)
    .subscribe(
      data => {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
        this.toastr.success('Successfully Deleted', 'Success');
      }
    );
  }


}
