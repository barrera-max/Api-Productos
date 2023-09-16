
import { DataTypes } from "sequelize"
import {sequelize} from "../data/cnn_db.js"

 export   const Producto  = sequelize.define("productos", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        timestamps: false,
        sequelize
    })




