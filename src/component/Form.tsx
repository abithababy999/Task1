import React, { ChangeEvent, FormEvent } from "react";
import { User } from "./Interface";
interface UserInputProps {
    newUser: User;
    handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  }

    const Form: React.FC<UserInputProps> = ({ newUser, handleInputChange, handleSubmit }) => {
  return (
    <div><h1 className="text-2xl font-bold " >Details</h1>
     <form onSubmit={handleSubmit} className="w-1/2 border border-black px-6 py-4 pt-6 pb-8 mb-2">
        <div>
            <label> First Name</label>
        </div>
            <div>
            <input type="text" 
                className="w-1/2 border border-black p-1/2" 
                required
                id="first"
                name="first"
                value={newUser.first}
                onChange={handleInputChange}
                >
            </input>       
        </div>
        <div>
            <label> Last Name</label>
        </div>
        <div>
            <input type="text"
            className="w-1/2 border border-black p-1/2" 
            required
            id="last"
            value={newUser.last}
            onChange={handleInputChange}
            name="last"></input>
        </div>
        <div>
            <label> Gender</label>
        </div>
        <div>
            <select id="genderid" name="gender" value={newUser.gender}  onChange={handleInputChange}
            className="w-1/2 border border-black p-1/2">
                <option value="" disabled selected>------------Select an Option------------   </option>
                <option value="F">Female</option>
                <option value="M">Male</option>
            </select>
        </div>
        <div>
            <label> Age</label>
        </div>
        <div>
            <input type="text" 
            id="age"
            name="age"
            value={newUser.age ?? ''}
            onChange={handleInputChange}
            className="w-1/2 border border-black p-1/2" required></input>
        </div>
        <div className="mt-4">
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded border border-black">
                Submit
                </button>
            </div>
        </div>
    </form>
    </div>
  )
}
export default Form;