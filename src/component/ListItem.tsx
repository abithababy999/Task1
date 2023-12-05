
import React from "react";
import { User } from "./Interface";

interface ListItemProps {
  user: User;
}

const ListItem: React.FC<ListItemProps> = ({ user }) => {
  let bgColorClass = '';
  if (user.age !== null && user.age !== undefined) {
  if (user.age < 18) {
    bgColorClass = 'bg-yellow-200';
  } else if (user.age > 50) {
    bgColorClass = 'bg-green-200';
  }}
  return (
    <tr className={bgColorClass}>
    <td className="border border-black border-double p-2">{user.first} {user.last}</td>
    <td className="border border-black border-double p-2">{user.gender}</td>
    <td className="border border-black border-double p-2">{user.age}</td>
    <td className="border border-black border-double p-2">-</td>
  </tr>
  );
};

export default ListItem;