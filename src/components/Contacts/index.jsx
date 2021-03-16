import React from "react";
import { loadContacts } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Contact from "./Contact";

function Contacts() {
  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loadingContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className="col-md-3 bg_cont">
      <div>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input className="search_contact" placeholder="Search contact" />
      </div>
      {loading ? (
        <h5 className="babel">loading...</h5>
      ) : (
        <ul className="list-group">
          {contacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default Contacts;
