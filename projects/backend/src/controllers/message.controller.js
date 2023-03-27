import { Op } from "sequelize";
import Message from "../models/Message.js";
import User from "../models/User.js";

export const getMessages = async (req, res) => {
  try {
    let messages = {};

    if(req.body.class_id) {
       messages = await Message.findAll({
        where: {
          class_id: req.body.class_id
        },
        include:[User]
      });
      
    } else {
       messages = await Message.findAll();
    }

    res.json({success: true, data: messages});
  } catch (error) {
    return res.status(500).json({success:false, message: error.message });
  }
};

export const createMessage = async (req, res) => {
  const { content, class_id, user_id } = req.body;

  try {
    const newMessage = await Message.create({
        content,
        class_id,
        user_id,
      });
    
      //EMITIR EL EVENTO NUEVO MENSAJE, CON EL NUEVO MENSAJE Y EL DUEÑO DEL MENSAJE
      //BUSCAR COMO HACER WITH
      res.json({success: true, data: newMessage});
  } catch (error) {
    return res.status(500).json({success:false, message: error.message });
  }
};
