import { Schema } from 'mongoose'

const characterSchema = new Schema({
  _id: String, // Schema.Types.ObjectId, Id que mongoDB le da por defecto a cada uno de los documentos que crea.
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String, // Podria ser un Enum ya que son limitados ['male', 'female', 'n/a']
  homeworld: { type: String, ref: 'Planet' },
  films: [{ type: String, ref: 'Film' }]
})

characterSchema.statics.list = async function () {
  return await this.find()
    .populate('homeworld', ['_id', 'name'])
    .populate('films', ['_id', 'title'])
}

characterSchema.statics.get = async function (id) {
  return await this.findById( id )
    .populate('homeworld', ['_id', 'name'])
    .populate('films', ['_id', 'title'])
}

characterSchema.statics.insert = async function (character) {
  return await this.create(character)
}

export default characterSchema

/* Podemos investigar y ver que otros tipos de datos y configuraciones
son validas para estos datos, de momento son Strings que tambien
funciona. */

/* Cuando hablamos de homeworld, ese string 1 es una referencia 
al id del planeta, y films es un array de referencias a peliculas */
