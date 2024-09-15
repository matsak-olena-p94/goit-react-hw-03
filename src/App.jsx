import { useState, useEffect } from "react"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import ContactForm from "./components/ContactForm/ContactForm"

function App() {
  
  const [contacts, setContacts] = useState(() => {
    const contactsFromLocalStorage = window.localStorage.getItem("contacts");
    if (contactsFromLocalStorage !== null) {
      return JSON.parse(contactsFromLocalStorage)
    }
    return (
      [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ]
    )
  }
  )

  const [query, setQuery] = useState("")

  const   visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(query.toLowerCase())
  })

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    }, [contacts])
  }

  const addContact = (newContact) => {
    setContacts((prevContacts)=>{
      return [...prevContacts, newContact]
    })
  }

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  })

    return (
      <div>
  <h1>Phonebook</h1>
  <ContactForm adding={addContact}/>  
  <SearchBox value={query} onSearch={setQuery}/>
  <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
</div>

    )
}

export default App