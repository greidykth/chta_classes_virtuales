import MessageModel from "./Message.js";
import OnlineClass from "./OnlineClass.js";
import UserModel from "./User.js";


UserModel.belongsTo(OnlineClass, {
  onUpdate: 'CASCADE',
  foreignKey: "active_class_id" 

});
UserModel.hasMany(MessageModel, { 
    onUpdate: 'CASCADE',
    foreignKey: "user_id" 
});

MessageModel.belongsTo(OnlineClass, {
  onUpdate: 'CASCADE',
  foreignKey: "class_id" 
});
MessageModel.belongsTo(UserModel, {
    onUpdate: 'CASCADE',
    foreignKey: "user_id", 
});

const Message = MessageModel;
const User = UserModel;

export { User, Message };