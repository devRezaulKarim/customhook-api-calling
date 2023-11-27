import Style from "./User.module.css";

export default function User({ user }) {
  const { name, username, email, phone, website } = user;
  return (
    <div className={Style.user}>
      <div>
        <h3>Name: {name}</h3>
        <h4>Username: {username}</h4>
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Website: {website}</h4>
      </div>
    </div>
  );
}
