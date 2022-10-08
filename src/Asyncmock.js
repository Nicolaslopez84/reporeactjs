const productos = [
    {   
        id:'1', 
        nombre:'HELADERA SKIN CONDENSER STANDARD ELECTRIC STE-2F1600PD PLATA', 
        precio:74000, 
        categoria: 'Heladeras', 
        stock: 5,
        image:'http://medias.musimundo.com/medias/00240150-172429-172429-01.png-172429-01.png-size515?context=bWFzdGVyfGltYWdlc3w0Mjc3NzJ8aW1hZ2UvcG5nfGg3Ni9oYjQvMTAzNzkwNzIwMTIzMTgvMDAyNDAxNTAtMTcyNDI5LTE3MjQyOV8wMS5wbmctMTcyNDI5XzAxLnBuZ19zaXplNTE1fDliOTk5NGUyOTJjMjY5MGMzOGQxZmE5OTQzYzZkNzg4MTg3ODAyNjk3ZTQyOTE4YjE2NjI3NDNhZTc1ZTM0OWM' , 
        descripcion: 'Sistema Skin Condenser capacidad ùtil total 328 lts vol ùtil refrigerador 249lts vol ùtil freezer 79lts potencia motor 1/4HP eficiencia energetica A freezer independiente con estante divisor de scongelamiento automatico luz interior regulador de temperatura manjas automaticas con dispenser color blanco.'
    },
    {
        id:'2', 
        nombre:'HELADERA CICLICO GAFA HGF387AFP PLATA', 
        precio:70000, 
        categoria: 'Heladeras', 
        stock: 5,
        image:'http://medias.musimundo.com/medias/00181058-176721-176721-01.png-176721-01.png-size515?context=bWFzdGVyfGltYWdlc3wyMjk5MTF8aW1hZ2UvcG5nfGg2My9oY2EvMTAzNzg4Njk0NzMzMTAvMDAxODEwNTgtMTc2NzIxLTE3NjcyMV8wMS5wbmctMTc2NzIxXzAxLnBuZ19zaXplNTE1fDI1MGEyZmRiYjI0MjUxZDNlNTBhOGM0Njk5YjRhMmM3ZTBjZDY4OWEzNDI0MmJmNzk1MDQ3MDlkNjAwNDc1MDc', 
        descripcion:'Heladera con freezer. capacidad de almacenamiento de 374lts. Freezer extra grande de 120 litros. Ice Twister. Puertas con manija embutida. Estantes de altura regulable. Anaqueles desmontables. Sistem a descong. automatico. Temperatura regulable.' 
    },
    {
        id:'3', 
        nombre:'HELADERA SKIN CONDENSER STANDARD ELECTRIC STE-2F1600PD PLATA', 
        precio:78000,
        categoria:'Heladeras', 
        stock: 5,
        image:'http://medias.musimundo.com/medias/00302019-163754-163754-01.png-163754-01.png-size515?context=bWFzdGVyfGltYWdlc3w1NzQ3MHxpbWFnZS9wbmd8aGE4L2g2MS8xMDM3OTMyOTExMDA0Ni8wMDMwMjAxOS0xNjM3NTQtMTYzNzU0XzAxLnBuZy0xNjM3NTRfMDEucG5nX3NpemU1MTV8MzkyZTE3MmI5M2JjYzJjMzRkODZiMjQ2ZDVkNjhhYjNlMzllMjU3ZmRhOWZmZmMwMzEyZDA2ZDc2MGUxNDZjOQ',
        descripcion:'Sistema Skin Condenser capacidad ùtil total 328 lts vol ùtil refrigerador 249lts vol ùtil freezer 79lts potencia motor 1/4HP eficiencia energetica A freezer independiente con estante divisor de scongelamiento automatico luz interior regulador de temperatura manjas automaticas con dispenser color blanco.'
    },
    {
        id:'4', 
        nombre:'SPLIT INVERTER BGH BSI53WCGT', 
        precio:120000, 
        categoria:'AA',
        stock: 5, 
        image:'http://medias.musimundo.com/medias/00382024-143035-143035-01-143035-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wyNDUwMXxpbWFnZS9qcGVnfGhhYS9oY2UvMTAzODA1MTk3NjgwOTQvMDAzODIwMjQtMTQzMDM1LTE0MzAzNV8wMS0xNDMwMzVfMDEuanBnX3NpemU1MTV8ZWEyMDgyMGQ3ZTViNTI5OTEwZGQzY2FkNzY3NWRiN2M4N2E3ZTM3YjFhMjYwMzA3ZjBjZDNkMmViMmZmYTQyZA',
        descripcion:'Aire acondicionado Split inverter. Frigorias 5300. Calorias 5300. Potencia 1650W. Control remoto. Display. Timer. Funcion sleep. Eficiencia energetica A. Tipo de gas refrigerante R410A.'
    },
    {
        id:'5', 
        nombre:'SPLIT BGH BS26WCCR', 
        precio: 100000, 
        categoria:'AA', 
        stock: 5,
        image:'http://medias.musimundo.com/medias/00193115-136506-136506-01-136506-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wyNjUwMXxpbWFnZS9qcGVnfGg1Yi9oMmUvMTAzNzg5MzA2MTgzOTgvMDAxOTMxMTUtMTM2NTA2LTEzNjUwNl8wMS0xMzY1MDZfMDEuanBnX3NpemU1MTV8YTY4Yzg5OWJjNzg5YjcxYmI4MWQxNTdkNDQxY2RjMmIyNWFlZDJjOTZkMWE1YzRkMzQxZjUwZTc4NjUxN2NhOA',
        descripcion:'Split frio calor de 2700W. Timer. Funcion sleep. Filtro Antibacterias.Deflector de aire movil.Funcion automatico. Funcion Deshumidificacion. autolimpiante. Control de flujo vertical. Funcion ventilacion. Funcion turbo. Hot Start. Control remoto. EE : A'
    },
    {
        id:'6', 
        nombre:'SPLIT TCL TACA-3300FCSA/EL', 
        precio:87000, 
        categoria:'AA', 
        stock: 5,
        image:'http://medias.musimundo.com/medias/00510058-177076-177076-01.png-177076-01.png-size515?context=bWFzdGVyfGltYWdlc3wyMTMzOTh8aW1hZ2UvcG5nfGhlYS9oZTgvMTAzNTU3NDcxNjAwOTQvMDA1MTAwNTgtMTc3MDc2LTE3NzA3Nl8wMS5wbmctMTc3MDc2XzAxLnBuZ19zaXplNTE1fDIyN2VkNzI0OTEzMzQ5ZDAwYjE0YTUwZjVjZTdiN2UyMGU0ZmFjMzcyYWIyYzMwOGYyM2IwOTJjM2YwNmU3OGM',
        descripcion:'Split frio Calor On off 3300 watts equivalente a 2838 frigorias eficiencia A Timer Deshumificador Auto restart modo sueño'
    },
    {
        id:'7', 
        nombre:'MOTOROLA MOTO G22 XT-2231-5', 
        precio: 40000, 
        categoria:'Telefonia', 
        stock: 5,
        image:'http://medias.musimundo.com/medias/00537000-145926-145926-01-145926-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2NTgwNnxpbWFnZS9qcGVnfGhjNi9oZmEvMTAzODQxOTA4NjU0MzgvMDA1MzcwMDAtMTQ1OTI2LTE0NTkyNl8wMS0xNDU5MjZfMDEuanBnX3NpemU1MTV8OTBjZjIzMTgxZmY4YWYzNDA5Y2ZiODhmYTQzOGM3YjkwZjA2ODU0ZmU4ZDE3YzU5NTQ0NmJkNDlhMTdmZjUwMA',
        descripcion:'Celular de 6.53" IPS HD+ (720x1600, 269, HiD, 90 Hz). Procesador MediaTek Helio G37, Octa Core (2.3 GHz). Sistema operativo Android 12. '
    }     
]

export const getProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            resolve(productos)
        }, 1000)
    })
}

export const getProducto = (idProducto) => {
    return new Promise ((resolve, reject) => {
        let request = productos.find ((item)=>{
            return item.id === idProducto
        })
        setTimeout (()=> {
            resolve(request)    
        }, 1000)
    })
}

export const getProductoXCategoria = (categoria) => {
    return new Promise ((resolve, reject) => {
        let filtroCategorias = productos.filter ((item)=>{
            return item.categoria === categoria
        })
        setTimeout (()=> {
            resolve(filtroCategorias)
        }, 1000)
    })
}

