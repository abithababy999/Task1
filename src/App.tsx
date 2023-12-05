import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Form from "./component/Form";
import FormList from "./component/FormList";
import { User } from "./component/Interface";



const App: React.FC = () => {

  const[users, setUsers]= useState<User[]>([]);
  const[newUser, setNewUser]= useState<User>({ first: "", last: "", gender: "", age: null });
  useEffect(()=>{
    const stored=localStorage.getItem("users");
    if(stored)
    {
      setUsers(JSON.parse(stored));
    }
  },[]);

  const createUser = (user: User) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(newUser);
    setNewUser({ first: "", last: "", gender: "", age: null });
  };
  
  const clearLocalStorage = () => {
    localStorage.clear();
    setUsers([]);
  };

  return (
    <div className="App">
      <Form
        newUser={newUser}
        handleInputChange={handleInputChange}


        handleSubmit={handleSubmit}
      />
       <FormList users={users} />
      <button onClick={clearLocalStorage}
      className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded border border-black ml-4">
      Clear</button>
    </div>
    
  );
};

export default App;
