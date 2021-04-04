import React from "react";

export default function Dashboard(props){
  return(
    <div>
      <div>Dashboard</div>
      <div>{props.loggedInStatus}</div>
    </div>
  )
}