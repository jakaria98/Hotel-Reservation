import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
// import Register from "./pages/register";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import Error from "./pages/error";
import RoomDetails from "./pages/roomDetails";
import Navbar from "./components/Navbar";
import BookRoom from "./pages/bookRoom";
import UpdateRoom from "./pages/updateRoom";
import Thanks from "./pages/thanks";
import Guest from "./pages/guest";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/rooms/book-room/:room_key" component={BookRoom} />
        <Route path="/rooms/update/:room_key" component={UpdateRoom} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/guests" component={Guest} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:room_key" component={RoomDetails} />
        <Route exact component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
