import React from 'react'
import { User } from "./Interface";
import ListItem from './ListItem';
interface ListProps {
    users: User[];
  }
  const FormList: React.FC<ListProps> = ({ users }) => {
  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Listing</h2>
    <div className="overflow-x-auto">
      <table className="w-1/2 table-auto">
        <thead className="bg-gray-200">
            <tr>
            <th className='border border-black border-double'>Name</th>
            <th className='border border-black border-double'>Gender</th>
            <th className='border border-black border-double'>Age</th>
            <th className='border border-black border-double'>Action</th>
            </tr>
            </thead>
            <tbody>
          {users.map((user, index) => (
            <ListItem key={index} user={user} />
          ))}
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default FormList

