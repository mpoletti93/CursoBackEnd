
import admin from "firebase-admin"
import fs from 'fs'

const serviceAccount = JSON.parse(fs.readFileSync("./db/backend32190-3835c-firebase-adminsdk-i0snq-321d86ee78.json"))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

//const query = db.collection('test')

//console.log(await query.get())
/*
const coll = await query.get()
coll.forEach(doc => {
    console.log(doc.data());
})
*/

const query = db.collection("colores")

const red = await query.add ({nombre:'red'})
const green = await query.add ({nombre:'green'})
const blue = await query.add ({nombre:'blue'})

console.log('colores creados')

const todosloscolores = await query.get()
todosloscolores.forEach(color =>{
    console.log(color.data())
})

console.log('get colores')

await query.doc(blue.id).update({nombre: 'navy'})

console.log('color blue cambiado por navy')

await query.doc(green.id).delete()

console.log('green eliminado')
