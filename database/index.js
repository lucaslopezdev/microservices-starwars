import server from './src/server.js'

const PORT = 8004

server.listen(PORT, () => {
  console.log(`Database service on port ${PORT}`)
})





/* hw 2 parte 1, pruebas de metodos estaticos */

/* Characters */
/* import { Character } from './src/database/index.js' */

/* Character.list().then((res) => console.log(res))
Character.get(3).then((res) => console.log(res)) */

/* Character.insert({
  _id: '201',
  name: 'Lucas Lopez',
  birth_year: '1999',
  unCampoCualquiera: 'HOLA',
  gender: 'male'
}).then(res => console.log(res)) */

/* Films */
/* import { Film } from './src/database/index.js'

Film.insert({
  _id: '211',
  title: 'Buenos Aires come back',
  producer: 'Javier Milei',
  release_date: new Date()
}).then((res) => console.log(res)) */

/* Lo importante es que ambos metodos se llaman list por mas que trabajen
diferente por detras */

