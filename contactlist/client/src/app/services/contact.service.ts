import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../contacts/contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  // retrieving contacts
  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(environment.API_ENDPOINT);
  }

  // adding new contact
  addContact(contact:Contact) {
    let body = JSON.stringify(contact);
    return this.httpClient.post(environment.API_ENDPOINT, contact, httpOptions);
  }

  // update existing contact
  updateContact(contact:Contact) {
    let body = JSON.stringify(contact);
    let endPoint = environment.API_ENDPOINT + contact._id;
    return this.httpClient.put(endPoint, contact, httpOptions);
  }

  // retrieving contacts
  deleteContact(id:string) {
    let endPoint = environment.API_ENDPOINT + id;
    return this.httpClient.delete<any>(endPoint);
  }

}
