import List from "./List"
import Form from "./Form"
import { useState, useEffect } from "react"
import './contacts.css';

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Mehmet Yılmaz",
            phone_number: "123123"
        },
        {
            fullname: "Ayşe Gümüş",
            phone_number: "456457"
        },
        {
            fullname: "Nazlı Tuğba",
            phone_number: "987659"
        },
        {
            fullname: "Derya Akın",
            phone_number: "674356"
        },

    ])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id="container">
            <h3 className="header">CONTACTS</h3>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;