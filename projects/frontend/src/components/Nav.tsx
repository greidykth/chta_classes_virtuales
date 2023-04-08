import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions";

export default function Nav() {
  const user = useSelector((state: any) => state.chat.user);
  const { login } = user;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <nav className="bg-primary">
      <div className="d-flex p-2 justify-content-between">
        <h1 className="text-white">Clases Virtuales</h1>
        {
          login &&
          <button
          className="btn btn-danger mx-3"
          onClick={handleLogout}
          type="button"
          >
            LogOut
          </button>
        }
        </div>
    </nav>
  );
}
