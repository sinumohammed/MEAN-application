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
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private contactSerrvice: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactSerrvice.getContacts().subscribe(
      data => {
        this.contacts = data;
      },
      err => console.error(err),
      () => console.log('done')
    );
  }

  addContact() {
    const newContact: Contact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.contactSerrvice.addContact(newContact).subscribe(
      data => {
        console.log(data);
        this.getContacts();
        this.clearFields();
      },
      err => console.error(err)
    );
  }

  editContact(contact: Contact) {
    this.first_name = contact.first_name;
    this.last_name = contact.last_name;
    this.phone = contact.phone;
    //this.addContact();
  }

  deleteContact(id: string) {
    this.contactSerrvice.deleteContact(id).subscribe(
      data => {
        if (data.n == 1) {
          this.getContacts();
        }
      },
      err => console.error(err)
    );
  }

  clearFields() {
    this.first_name = '';
    this.last_name = '';
    this.phone = '';
  }
}
