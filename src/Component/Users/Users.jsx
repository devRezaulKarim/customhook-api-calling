import useFetchData from "../../Hooks/useFetchData";
import User from "../User/User";
import Style from "./Users.module.css";

export default function Users() {
  const { data: users } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className={Style.usersWrapper}>
      <div className={Style.heading}>
        <h1>Users</h1>
      </div>
      <div className={Style.users}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
