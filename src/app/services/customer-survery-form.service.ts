import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Survey {
  name: string;
  address: string;
  phone: number;
  typeOfTeaUsed: string;
  reasonForUsingWatawala: string;
  reasonForUsingOtherBrands: string;
  reasonForUsingOtherBrandsOther: string;
  user: string;
  createdAt: number;
  updateUser: string;
  updatedTimestamp: string;
  isRemoved: boolean;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerSurveryFormService {

  private surverysCollection: AngularFirestoreCollection<Survey>;
  private suverys: Observable<Survey[]>;

  constructor(db: AngularFirestore) {
      this.surverysCollection = db.collection<Survey>('surveys');

      this.suverys = this.surverysCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
      );

   }

   getSurverys() {
      return this.suverys;
   }

   getSurvey(id) {
      return this.surverysCollection.doc<Survey>(id).valueChanges();
   }

   updateSurvey(survey: Survey, id:  string) {
      return this.surverysCollection.doc(id).update(survey);
   }

   addSurvey (survey: Survey) {
      return this.surverysCollection.add(survey);
   }

   removeSurvey (id) {
      return this.surverysCollection.doc(id).delete();
   }
 
}
