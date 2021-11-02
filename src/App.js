import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import ContactsContextProvider from './components/ContactBook/ContactContext';
import ContactList from './components/ContactBook/ContactList';
import Counter from './components/Counter/Counter';
import Ingredients from './components/Ingredients';
import Receipts from './components/Receipts';
import User from './components/User';
import AddContact from './components/ContactBook/AddContacts'


function App() {
  const [meal, setMeal] = useState("")
  return (
    <div>
      <ContactsContextProvider>
        <Counter />
        <Receipts meal={meal} setMeal={setMeal} />
        <User />
        <Form />
        <ContactList />
        <AddContact />

      </ContactsContextProvider>

    </div>
  );
}

export default App;
