import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../contacts/contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { appConfig } from '../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  // retrieving contacts
  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(appConfig.API_ENDPOINT);
  }

  // adding new contact
  addContact(contact:Contact) {
    let body = JSON.stringify(contact);
    return this.httpClient.post(appConfig.API_ENDPOINT, contact, httpOptions);
  }

  // retrieving contacts
  deleteContact(id:string) {
    let endPoint = appConfig.API_ENDPOINT + id;
    return this.httpClient.delete<any>(endPoint);
  }

}
