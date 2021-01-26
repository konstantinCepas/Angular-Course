import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Injectable, Query } from '@angular/core';
import { map } from 'rxjs/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {
  }

    getCatergories() {
      return this.db.list('/categories/', kveri => kveri.orderByChild('name')).snapshotChanges().map(changes => {
        return changes.map(c => ({key: c.payload.key, name: c.payload.child('name').val()}))
      })
    
    
    }
    
}
