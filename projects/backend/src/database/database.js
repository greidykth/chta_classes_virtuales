import Sequelize from "sequelize";

const database = process.env.MYSQL_DATABASE;
const username = "root";
const password = "root";

export const sequelize = new Sequelize(database, username, password, {
  host: "mysql",
  dialect: "mysql",
});
