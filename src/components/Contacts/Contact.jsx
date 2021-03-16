import React from "react";
import { Link, useParams } from "react-router-dom";
import cx from "classnames";

function Contact(props) {
  const isOpenedContacts = parseInt(useParams().userId) === props.contact._id;

  return (
    <div className="bg_user">
      <li className="icon"></li>
      <li
        className={cx("contacts_li", {
          contacts_li: isOpenedContacts,
        })}
      >
        <Link to={`/${props.contact._id}`}>{props.contact.fullname}</Link>
      </li>
      <li className="time">9:00</li>
    </div>
  );
}

export default Contact;
