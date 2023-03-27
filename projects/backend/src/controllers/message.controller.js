import { Message, User } from "../models/index.js";


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

      await newMessage.reload({
        include: User
      });
    
    
      //EMITIR EL EVENTO NUEVO MENSAJE, CON EL NUEVO MENSAJE Y EL DUEÑO DEL MENSAJE

      req.app.get('socket').emit('created_message', newMessage);

      res.json({success: true, data: newMessage});
  } catch (error) {
    return res.status(500).json({success:false, message: error.message });
  }
};

