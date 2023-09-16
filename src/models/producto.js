
import { DataTypes } from "sequelize"
import {sequelize} from "../data/cnn_db.js"

    const Producto  = sequelize.define("Producto", {
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




