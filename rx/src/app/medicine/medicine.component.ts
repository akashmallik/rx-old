import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicineService } from '../services/medicine.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MedicineDialogComponent } from '../medicine-dialog/medicine-dialog.component';

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
  private errors: any[] = [];

  displayedColumns: string[] = ['medicine', 'action'];
  dataSource: MatTableDataSource<Medicine>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private medicineService: MedicineService,
    public dialog: MatDialog,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.medicineService.getAll()
    .subscribe(
      (data: Medicine[]) => {
        this.dataSource = new MatTableDataSource<Medicine>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => {
        this.errorHandler(error);
      }
    );
  }

  public errorHandler(response) {
    this.errors = response.error.errors;
    if (this.errors) {
      for (const error in this.errors) {
        if (this.errors.hasOwnProperty(error)) {
          const element = this.errors[error];
          this.toastr.warning(this.errors[error], 'Warning');
        }
      }
    } else {
      if (response.status === 404) {
        this.toastr.warning('Not Found!', '404');
      } else {
        this.toastr.error(response.message, 'Error');
      }
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(elementdata?: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';

    if (elementdata) {
      dialogConfig.data = elementdata;
    } else {
      dialogConfig.data = [];
    }

    const dialogRef = this.dialog.open(MedicineDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          if (data.id) {
            this.medicineService.update(data.id, data)
            .subscribe(
              response => {
                this.dataSource._updateChangeSubscription();
                this.toastr.success('Successfully Updated', 'Success');
              },
              error => {
                this.errorHandler(error);
              }
            );
          } else {
            this.medicineService.create(data)
            .subscribe(
              response => {
                this.ngOnInit();
                // this.dataSource.data.push(data);
                // this.dataSource._updateChangeSubscription();
                this.toastr.success('Successfully Added', 'Success');
              },
              error => {
                this.errorHandler(error);
              }
            );
          }
        }
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
      },
      error => {
        console.log(error);
        this.errorHandler(error);
      }
    );
  }

}
