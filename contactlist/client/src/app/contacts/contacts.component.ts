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
  first_name: string;
  last_name: string;
  phone: string;

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
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
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
    this.first_name = contact.first_name;
    this.last_name = contact.last_name;
    this.phone = contact.phone;
  }

  deleteContact(contact: Contact) {
    if (confirm(`Are you sure to delete ${contact.first_name} ?`)) {
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
    this.first_name = '';
    this.last_name = '';
    this.phone = '';
    this._id = '';
  }
}
