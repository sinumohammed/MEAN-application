import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contacts/contact'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;
  isLoading = false;

  _id: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth:string;
  constructor(private contactSerrvice: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.isLoading = true;
    this.contactSerrvice.getContacts().subscribe(
      data => {
        this.contacts = data;
      },
      err => console.error(err),
      () => this.isLoading = false
    );
  }

  addContact() {
    this.isLoading = true;
    const newContact: Contact = {
      name: this.name,
      gender: this.gender,
      annualSalary: this.annualSalary,
      dateOfBirth: this.dateOfBirth
    }
    if (!this._id) {
      this.contactSerrvice.addContact(newContact).subscribe(
        data => {
          console.log(data);
          this.getContacts();
          this.clearFields();
        },
        err => console.error(err),
        () => this.isLoading = false
      );
    }
    else {
      newContact._id = this._id;
      this.contactSerrvice.updateContact(newContact).subscribe(
        data => {
          console.log(data);
          this.getContacts();
          this.clearFields();
        },
        err => console.error(err),
        () => this.isLoading = false
      );
    }
  }

  editContact(contact: Contact) {
    this._id = contact._id;
    this.name = contact.name;
    this.gender = contact.gender;
    this.annualSalary = contact.annualSalary;
    this.dateOfBirth=contact.dateOfBirth;
  }

  deleteContact(contact: Contact) {
    if (confirm(`Are you sure to delete ${contact.name} ?`)) {
      this.isLoading = true;
      this.contactSerrvice.deleteContact(contact._id).subscribe(
        data => {
          if (data.n == 1) {
            this.getContacts();
          }
        },
        err => console.error(err),
        () => this.isLoading = false
      );
    }
  }

  clearFields() {
    this.name = '';
    this.gender = '';
    this.dateOfBirth = '';
    this.annualSalary=null;
    this._id = '';
  }
}
