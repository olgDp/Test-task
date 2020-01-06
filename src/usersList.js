import React from "react";

const UsersList = ({ peopleList }) => {
  return (
    <div className="users">
      {peopleList && <h1>Users</h1>}
      {!peopleList && <p className="users-msg">Please move mouse over the month</p>}
      <ul>
        {peopleList &&
          peopleList.map(({ id, firstName, lastName }) => (
            <li className="users-item" key={id}>
              {firstName} {lastName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UsersList;
