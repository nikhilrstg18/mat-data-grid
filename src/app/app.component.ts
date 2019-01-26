import { Component, OnInit } from '@angular/core';
import { GridData } from './modals/grid-data';
import { MatDataGridColDef } from './modals/mat-data-grid-col-def';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  baseUrl: string;
  resource: string;
  uri: string;
  rowsSelections: any[];
  colDefs: MatDataGridColDef[];
  maxBlockInCache: number;
  gridDataArray: GridData[];
  imageLink1 :string;

  constructor() {
    
  }
  ngOnInit(): void {
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
      new MatDataGridColDef('studentId', 'Id', (element: any) => `${element.studentId != null ? element.studentId : ''}`, '16.67rem', false),
      new MatDataGridColDef('studentName', 'Name', (element: any) => `${element.studentName != null ? element.studentName : ''}`, '16.67rem', false),
      new MatDataGridColDef('studentAddress', 'Address', (element: any) => `${element.studentAddress != null ? element.studentAddress : ''}`, '16.67rem', false),
      new MatDataGridColDef('studentDepartment', 'Department', (element: any) => `${element.studentDepartment != null ? element.studentDepartment : ''}`, '16.67rem', false),
      new MatDataGridColDef('studentScore', 'Score', (element: any) => `${element.studentScore != null ? element.studentScore : ''}`, '16.67rem', true),
      new MatDataGridColDef('isMerit', 'Merit', (element: any) => `${element.isMerit != null ? element.isMerit : ''}`, '16.67rem', false),
      
    ];
    this.maxBlockInCache = 5;
    this.imageLink1 = environment.img.infiniteScrolling;

  }

}