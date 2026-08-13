import { useContext } from "react";
import { UserContext } from "../App";

function UserCard() {
  const username = useContext(UserContext);//hook

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid blue",
      }}
    >
      <h2>Welcome {username}</h2>
    </div>
  );
}

export default UserCard;
************************************************************
import UserCard from "./UserCard";

function Dashboard() {
  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "20px",
        width: "300px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h1>Dashboard</h1>

  <UserCard/>
    </div>
  );
}

export default Dashboard;