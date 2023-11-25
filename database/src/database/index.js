import mongoose from 'mongoose'
import { MONGO_URI } from '../config/envs.js'
import characterSchema from './schemas/characterSchema.js'
import filmSchema from './schemas/filmSchema.js'
import planetSchema from './schemas/planetSchema.js'

/* A createConnection le pasamos la URL del cluster pero la vamos a traer
de las variables de entorno */
const conn = mongoose.createConnection(MONGO_URI)

const Character = conn.model('Character', characterSchema)
const Film = conn.model('Film', filmSchema)
const Planet = conn.model('Planet', planetSchema)

export default {
  Character,
  Film,
  Planet
}

/* Character.find()
  .populate('films', ["_id", "title"])
  .then((res) => console.log(res[0])) */

/* find es el equivalente en sequelize al findAll,
populate */
