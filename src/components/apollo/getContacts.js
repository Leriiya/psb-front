import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_CONTACTS } from "../../Graphql/Queries";

function GetContacts() {
  const { error, loading, data } = useQuery(LOAD_CONTACTS);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    if (data) {
      setContacts(data.user);
      console.log(data.user);
    }
  }, [data]);
  if (loading) return "Loading..."
  if (error) return error.message
  console.log("GetContacts!")
  return (
    <div>
      {contacts.map((val) => {
        return <h3>{val.name}</h3>;
      })}
    </div>
  );
}

export default GetContacts;
