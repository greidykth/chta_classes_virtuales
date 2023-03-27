import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Message from "../components/UI/Message";
import Spinner from "../components/UI/Spinner";
import useHttp from "../hooks/use-http";
import { set_user } from "../store/actions";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dataUser, setDataUser] = useState({
    name: "",
    username: "",
    password: "",
    type_user: "",
  });

  const [message, setMessage] = useState("");
  const {
    isSaving,
    isLoading,
    error,
    sendRequest: sendRequestRegister,
  } = useHttp();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setDataUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");

    if (
      [
        dataUser.name,
        dataUser.username,
        dataUser.password,
        dataUser.type_user,
      ].includes("")
    ) {
      setMessage("Todos los campos son obligatorios");
      return;
    }

    sendRequestRegister(
      {
        url: "http://localhost:8000/users",
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: dataUser,
      },
      userRegister
    );
  };

  const userRegister = (resultado: any) => {
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
                <h1 className="h3 mb-2 fw-normal">Registrate</h1>
                <h5 className="h5 mb-4 fw-normal">Para acceder a una clase</h5>

                <div className="mb-3 d-flex flex-column justify-content-center align-items-start">
                  <label htmlFor="name" className="fw-bold">
                    Nombre
                  </label>
                  <input
                    type="name"
                    name="name"
                    className="form-control"
                    placeholder="Maria Perez"
                    value={dataUser.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 d-flex flex-column justify-content-center align-items-start">
                  <label htmlFor="username" className="fw-bold">
                    Usuario
                  </label>
                  <input
                    type="username"
                    name="username"
                    className="form-control"
                    placeholder="mariap"
                    value={dataUser.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 d-flex flex-column justify-content-center align-items-start">
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
                <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
                  <label htmlFor="type_user" className="fw-bold">
                    Tipo de usuario
                  </label>
                  <select
                    className="form-control"
                    name="type_user"
                    value={dataUser.type_user}
                    onChange={handleChange}
                  >
                    <option selected disabled value="">
                      Seleccione
                    </option>
                    <option value="MODERATOR">Moderador</option>
                    <option value="STUDENT">Estudiante</option>
                  </select>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={isSaving}>
                  Registrarse
                </button>
                <Link
                  to="/login"
                  className="w-100 btn btn-lg text-primary"
                  type="submit"
                >
                  Login
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
