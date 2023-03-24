import React, { Component } from 'react';
import { Container } from "./App.styled";
// import { nanoid } from 'nanoid';
// model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // onSendFeedback = option =>
  //   this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  // countTotalFeedback = () =>
  //   this.state.good + this.state.neutral + this.state.bad;

  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   return total
  //     ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
  //     : 0;
  // };

  render() {
    return (
      <Container>
        <section>
          <h1>Phonebook</h1>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <button type="submit">Add contact</button>
          </form>

          <h2>Contacts</h2>
          <div className="filters"></div>
          <ul className="contacts-list">
            <li className="contact"></li>
          </ul>
        </section>
      </Container>
    );
  }
}
