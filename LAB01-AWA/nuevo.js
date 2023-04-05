var http = require('http');
fs = require('fs');

var inicio = fs.readFileSync('./Bienvenido.html');
var nosotros = fs.readFileSync('./nosotros.html');
var servicio = fs.readFileSync('./servicios.html');
var catalogo = fs.readFileSync('./catalogo.html');
var contacto = fs.readFileSync('./contacto.html');
var confirma = fs.readFileSync('./confirma.html');
var dataString = ''

const server = http.createServer((req, res)=>{
    var url = req.url;

    if (url === '/'){
        res.write(inicio)
    }
    else if(url === '/nosotros'){
        res.write(nosotros)
    }
    else if(url === '/servicio'){
        res.write(servicio)
    }
    else if(url === '/catalogo'){
        res.write(catalogo)
    }
    else if(url === '/contacto'){
        res.write(contacto)
    }
    else if(url === '/confirma.html'){
        
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          const listaDatos = JSON.parse(body);
          console.log(listaDatos);
          res.end('Datos recibidos!');
        });
      



    }
    else{
        res.write('Pagina no encontrada')
    }
    res.end();
});

server.listen(8080);


