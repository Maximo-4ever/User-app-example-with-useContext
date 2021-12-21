import { useContext } from "react";
import UserContext from "../context/User/UserContext";

export default function Profile() {
  const { selectedUser } = useContext(UserContext);
  console.log(selectedUser);

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar}
            alt={selectedUser.first_name}
            className="card-img-top rounded-circle m-auto img-fluid"
            style={{width: 180}}
          />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>{selectedUser.email}</h3>
        </div>
      ) : (
        <h1>No user selected</h1>
      )}
    </>
  );
}
