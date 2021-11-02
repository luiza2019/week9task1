import React, { useContext, useEffect } from "react";
import ContactCard from "./ContactCard";
import { contactContext } from "./ContactContext";

const ContactList = (props) => {
    const { contacts, getAllContacts } = useContext(contactContext);
    useEffect(() => getAllContacts(), []);
    return (
        <div className="contactList">
            {contacts ? (
                contacts.map((item) => (
                    <ContactCard key={item.id} contact={item} id={item.id} />
                ))
            ) : (
                <div>loading</div>
            )}
        </div>
    );
};

export default ContactList;