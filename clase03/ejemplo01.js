//EJEMPLO 1

Promise.resolve(20)
.then( x => x + 1 ) //21
.then( x => x * 2 ) //42
.then( x => {
    if(x==22) throw 'Error' //no entra al if
    else return 80 // ahora vale 80
})
.then( x => 30 ) //aca se vuelve a modificar a 30
.then( x => x / 2 ) // 30/2 = 15
.then( x => console.log(x) ) //imprime 15 
.catch(err => console.log(err) )

//EJEMPLO 2

Promise.resolve(10)
.then( x => x + 1 ) //11
.then( x => x * 2 ) //22
.then( x => {
    if(x==22) throw 'Error' //entra al if y devuelve error
    else return 80 
})
.then( x => 30 ) 
.then( x => x / 2 ) 
.then( x => console.log(x) )  
.catch(err => console.log(err) ) //VA A ENTRAR AL CATCH e imprime el error

//EJEMPLO 3

Promise.resolve(30)
.then( x => x + 1 ) //31
.then( x => x * 2 ) //62
.then( x => {
    if(x==22) throw 'Error' //no entra al if
    else return 80 // ahora vale 80
})
.then( x => 30 ) //aca se vuelve a modificar a 30
.then( x => x / 2 ) // 30/2 = 15
.then( x => console.log(x) ) //imprime 15 
.catch(err => console.log(err) )