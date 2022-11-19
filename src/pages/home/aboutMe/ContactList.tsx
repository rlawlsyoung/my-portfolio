import React from "react";
import styled from "styled-components";

const ContactList: React.FC<{
  contact: { title: string; text: string };
}> = ({ contact }) => {
  return (
    <StyledContactList className="list">
      <p className="list-title">{contact.title}</p> : {contact.text}
    </StyledContactList>
  );
};

const StyledContactList = styled.li`
  .list-title {
    font-weight: 800;
  }
`;

export default ContactList;
