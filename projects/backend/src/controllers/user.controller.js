import OnlineClass from "../models/OnlineClass.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ success: true, data: users });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, username, password, type_user } = req.body;

  console.log(req.body);

  try {
    const usernameFind = await User.findOne({
      where: {
        username
      },
    });
    if (usernameFind)
      return res.status(404).json({ message: "Username ya existe" });

    const activeOnlineClass = await OnlineClass.findOne({
      where: {
        active: "ACTIVE",
      },
    });

    if (!activeOnlineClass)
      return res.status(404).json({ message: "No hay clases disponibles" });

    const hash = bcrypt.hashSync(password, 8);

    const newUser = await User.create({
      name,
      username,
      password: hash,
      type_user,
      active_class_id: activeOnlineClass.id,
    });

    res.json({ success: true, data: { id: newUser.id, name: newUser.name, username:newUser.username, type_user:newUser.type_user, active_class_id:newUser.active_class_id } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userFind = await User.findOne({
      where: {
        username,
      },
    });

    if (!userFind)
      return res
        .status(404)
        .json({ message: "Usuario y/o contraseña incorrectos" });

    bcrypt.compare(password, userFind.password, function (err, response) {
      if (err || !response) {
        // Las contraseñas no coinciden
        res.status(401).send("Usuario y/o contraseña incorrectos");
      } else {
        // Las contraseñas coinciden, el usuario se autentica correctamente
        res.json({
          success: true,
          data: { id: userFind.id, name: userFind.name, username:userFind.username, type_user:userFind.type_user, active_class_id:userFind.active_class_id }
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
