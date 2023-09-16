import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("my_db.sqlite", "", "", {
    dialect: "sqlite",
    storage: "./data/my_db.sqlite"
    
})