import mongoose from "mongoose";

const usuarioCollection = "usuarios"

const UsuariosSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: String
})

export const usuarios = mongoose.model(usuarioCollection, UsuariosSchema)