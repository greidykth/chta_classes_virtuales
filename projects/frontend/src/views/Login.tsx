import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Message from "../components/UI/Message";
import Spinner from "../components/UI/Spinner";
import useHttp from "../hooks/use-http";
import { set_user } from "../store/actions";


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const {
    isSaving,
    isLoading,
    error,
    sendRequest: sendRequestLogin,
  } = useHttp();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");

    if ([dataUser.username, dataUser.password].includes("")) {
      setMessage("Todos los campos son obligatorios");
      return;
    }

    sendRequestLogin(
      {
        url: "http://localhost:8000/users/login",
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: dataUser,
      },
      userLogin
    );
  };

  const userLogin = (resultado : any) => {
    dispatch(set_user(resultado));
    navigate("/home");
  };

  return (
    <>
      <div className="container overflow-hidden">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="d-flex justify-content-center align-items-center vh-100">
              <form className="card p-5 shadow" onSubmit={submitHandler}>
                {error && <Message>{error}</Message>}
                {message && <Message>{message}</Message>}
                <h1 className="h3 mb-2 fw-normal">
                  Ingresa a nuestra plataforma
                </h1>
                <h5 className="h5 mb-5 fw-normal">
                  Si eres usuario registrado
                </h5>

                <div className="mb-3 d-flex flex-column justify-content-center align-items-start">
                  <label htmlFor="username" className="fw-bold">
                    Usuario
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="mariap"
                    value={dataUser.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
                  <label htmlFor="password" className="fw-bold">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={dataUser.password}
                    onChange={handleChange}
                  />
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Ingresar
                </button>
                <Link
                  to="/register"
                  className="w-100 btn btn-lg text-primary"
                  type="submit"
                >
                  Registrarse
                </Link>
                {isLoading && <Spinner />}
                <p className="mt-1 mb-3 text-body-secondary">
                  © 2023 Todos los derechos reservados
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
