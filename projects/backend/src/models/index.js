import MessageModel from "./Message.js";
import OnlineClassModel from "./OnlineClass.js";
import UserModel from "./User.js";


UserModel.belongsTo(OnlineClassModel, {
  onUpdate: 'CASCADE',
  foreignKey: "active_class_id" 

});
UserModel.hasMany(MessageModel, { 
    onUpdate: 'CASCADE',
    foreignKey: "user_id" 
});

OnlineClassModel.hasMany(UserModel, { 
    onUpdate: 'CASCADE',
    foreignKey: "active_class_id" 
});

MessageModel.belongsTo(OnlineClassModel, {
  onUpdate: 'CASCADE',
  foreignKey: "class_id" 
});
MessageModel.belongsTo(UserModel, {
    onUpdate: 'CASCADE',
    foreignKey: "user_id", 
});

const Message = MessageModel;
const User = UserModel;
const OnlineClass = OnlineClassModel;

export { User, Message, OnlineClass };