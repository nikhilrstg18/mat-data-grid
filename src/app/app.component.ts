import { Component, OnInit } from '@angular/core';
import { GridData } from './modals/grid-data';
import { MatDataGridColDef } from './modals/mat-data-grid-col-def';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // private columnDefs: any[];
  private baseUrl: string;
  private resource: string;
  private uri: string;
  private rowsSelections: any[];
  private colDefs: any[];
  private maxBlockInCache: number;
  private gridDataArray: GridData[];

  constructor() {
    this.baseUrl = `https://localhost:44378`;
    this.resource = `/api/values/GetValuePage`;
    this.uri = this.baseUrl + this.resource;
    this.rowsSelections = [
      {
        value: 25,
        viewValue: '25 Rows'
      },
      {
        value: 50,
        viewValue: '50 Rows'
      },
      {
        value: 75,
        viewValue: '75 Rows'
      },
      {
        value: 100,
        viewValue: '100 Rows'
      }
    ];
    this.colDefs = [
      new MatDataGridColDef('studentId', 'Student Id', (element: any) => `${element.studentId != null ? element.studentId : ''}`, '12.25rem', false),
      new MatDataGridColDef('studentName', 'Student Name', (element: any) => `${element.studentName != null ? element.studentName : ''}`, '12.375rem', false),
      new MatDataGridColDef('studentAddress', 'Student Address', (element: any) => `${element.studentAddress != null ? element.studentAddress : ''}`, '12.375rem', true),
      new MatDataGridColDef('studentDepartment', 'Department', (element: any) => `${element.studentDepartment != null ? element.studentDepartment : ''}`, '12.375rem', false),
      new MatDataGridColDef('studentScore', 'Student Score', (element: any) => `${element.studentScore != null ? element.studentScore : ''}`, '12.375rem', false),
      new MatDataGridColDef('isMerit', 'Merit', (element: any) => `${element.isMerit != null ? element.isMerit : ''}`, '12.375rem', false),
      
    ];
    this.maxBlockInCache = 5;
  }
  ngOnInit(): void {

  }

}