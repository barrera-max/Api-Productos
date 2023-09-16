import * as http from 'http'


let data = null
http.createServer((req, res)=>{
    // procesar el pedido HTTP y generar la respuesta correspondiente:
    const {url, method} = req
    console.log(`Pedido HTTP con URL: ${url}, mediante: ${method}`)
    //Por defecto esto procesa solo GETs

    switch(method){

        case 'GET':{
            if(url == '/')
                data = {mensaje: 'BIENVENIDO A LA API DE PRODUCTOS!'}
            
            if(url == '/productos')
                data = {mensaje: 'MOSTRANDO PRODUCTOS...'} 
                break;
        }
        case 'POST':{
            if(url == '/productos'){
                //INVESTIGAR COMO PROCESAR UN POST CON DATOS DE UN PRODUCTO PARA
                //GRABARLO EN LA BASE DE DATOS y DEVOLVER 200 OK    
            }
            break;
        }
    }


    res.writeHead(200, 'Ok', {'content-type': 'application/json'})
    res.write(JSON.stringify(data))
    res.end()

}).listen(3002, async()=>{
    console.log('Escuchando en el puerto 3002!')
   
})
//instalar la dependendcia "npm i nodemon -D"


