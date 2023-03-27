import "./App.css";
import { socket, SocketContext } from "./context/socket";
import Nav from "./components/Nav";
import Login from "./views/Login";
import Register from "./views/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
