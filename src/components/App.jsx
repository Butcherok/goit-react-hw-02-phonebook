import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contactList/contactList';
import { ContactsTitle, Container, Phonebook, PhonebookTitle } from './App.styled'; 
// model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  contactSubmit = e => {
    e.preventDefault();

    this.addContact({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  addContact = contact => {
    console.log('addContact - ', contact);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Phonebook>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm
            addContact={this.addContact}
            contacts={this.state.contacts}
          />
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter
            contactChange={this.contactChange}
            filter={this.state.filter}
          />
          <ContactList
            getFilterContact={this.getFilterContact}
            deleteContacts={this.deleteContacts}
          ></ContactList>
        </Phonebook>
      </Container>
    );
  }
}
