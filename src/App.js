import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import MainPage from "./Main/MainPage";
import Context from "./Main/Context";
import { DatePicker } from 'antd';


function App() {
  
  const [contacts, setContacts] = React.useState([]);

  const addNewContact = (contact) => {
    setContacts(contacts.concat(contact));
  };


  const contextValue = { contacts, addNewContact };

  return (
    <Context.Provider value={contextValue}>

      <MainPage />
      
    </Context.Provider>
  );
}

export default App;
