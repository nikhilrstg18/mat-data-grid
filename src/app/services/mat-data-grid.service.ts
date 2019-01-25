import { GridData } from './../modals/grid-data';
import { GridParams } from './../modals/grid-params';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MatDataGridService {
  //=======================================================
  // Uncomment this block when using http url and params to fetch data
  //=======================================================
  // queryParams: HttpParams;

  // constructor(private _http: HttpClient){ }

  // getRows(uri: string, gridParams: {}): Observable<any> {
  //   // create HttpParams
  //   var queryParams = new HttpParams();    
  //   for(var key in gridParams){
  //     queryParams = queryParams.set(key, gridParams[key]);
  //   }
    
  //   //@ getting data
  //   return this._http.get(uri,{params:queryParams});
  // }
  //=======================================================

  constructor(private db: AngularFireDatabase){

  }

  getRows(gridParams: GridParams): AngularFireList<GridData>{
    var refPath= '/griddata';
    //return this.db.database.ref(refPath).orderByChild('studentId'). limitToFirst(gridParams.pageSize).startAt(gridParams.startAt).once("value").then((snapshot)=> snapshot);
    if(gridParams.startAt){
      return this.db.list(refPath,ref=> ref.orderByKey().limitToFirst(gridParams.pageSize).startAt(String(gridParams.startAt)));
    }
    return this.db.list(refPath,ref=> ref.orderByKey().limitToFirst(gridParams.pageSize));
  }
}
