import "./App.css";
import { socket, SocketContext } from "./context/socket";
import Nav from "./components/Nav";
import Login from "./views/Login";
import Register from "./views/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./views/Home";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.chat.user);
  const {login} = user;

  useEffect(() => {
    !login && navigate('/');
 }, [login]);

  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
