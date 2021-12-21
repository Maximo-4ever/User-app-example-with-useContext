import { useContext, useEffect } from "react";
import UserContext from "../context/User/UserContext";

export default function UserList() {
  const { users, getUsers, getProfile } = useContext(UserContext);
  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          className="list-group-item list-group-item-action d-flex align-items-center"
          href="#!"
          key={user.id}
          onClick={() => getProfile(user.id)}
        >
          <img src={user.avatar} alt="" className="img-fluid me-4 rounded-circle" width="70" />
          <p className="mb-0">{`${user.first_name} ${user.last_name}`}</p>
        </a>
      ))}
    </div>
  );
}
