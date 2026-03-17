import { useState } from "react";
import "./App.css";

function App() {

  const [task,setTask] = useState("");
  const [phone,setPhone] = useState("");

  const sendTask = async () => {

    await fetch("https://campusflow-hm4a.onrender.com",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        task:task,
        phone:phone
      })
    })

    // WhatsApp message
    window.open(
      `https://wa.me/${phone}?text=Reminder:%20${task}`,
      "_blank"
    )

  }

  return (

    <div className="container">

      <div className="sidebar">
        <h2>CampusFlow</h2>
        <p>Dashboard</p>
        <p>Create Task</p>
        <p>Calendar</p>
        <p>Reminders</p>
      </div>

      <div className="main">

        <h1>Smart Task Creator</h1>

        <div className="card">

        <input
        placeholder="Enter your task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        />

        <input
        placeholder="Enter WhatsApp Number"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        />

        <button onClick={sendTask}>
        Create Smart Reminder
        </button>

        </div>

      </div>

    </div>

  )

}

export default App