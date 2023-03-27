import OnlineClass from "../models/OnlineClass.js";

export const getOnlineClasses = async (req, res) => {
  try {
    const onlineClasses = await OnlineClass.findAll();
    res.json({success: true, data: onlineClasses});
  } catch (error) {
    return res.status(500).json({success:false, message: error.message });
  }
};

export const getOnlineClass = async (req, res) => {
  const { id } = req.params;
  try {
    const onlineClass = await OnlineClass.findOne({
      where: {
        id
      }
    });
    
    if (!onlineClass) return res.status(404).json({ message: "Online Class not found"});

    res.json({success: true, data: onlineClass});
  } catch (error) {
    return res.status(500).json({success:false, message: error.message });
  }
};

export const createOnlineClass = async (req, res) => {
  const { name, description, active, url } = req.body;

  try {
    const newOnlineClass = await OnlineClass.create({
      name,
      description,
      active,
      url,
    });

    res.json({success: true, data: newOnlineClass});
  } catch (error) {
    return res.status(500).json({success:false, message: error.message });
  }
};

export const updateOnlineClass = async (req, res) => {
  const { id } = req.params;
  const { name, description, active, url } = req.body;

  try {
    const onlineClass = await OnlineClass.findByPk(id);

    onlineClass.name = name;
    onlineClass.description = description;
    onlineClass.active = active;
    onlineClass.url = url;

    await onlineClass.save();
    res.json({success: true, data: onlineClass});

  } catch (error) {
    return res.status(500).json({success:false, message: error.message });
  }
};

export const deleteOnlineClass = async (req, res) => {
  try {
    const { id } = req.params;
    await OnlineClass.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({success:false, message: error.message });
  }
};
