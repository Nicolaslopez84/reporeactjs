const productos = [
    {id:'1', nombre:'HELADERA SKIN CONDENSER STANDARD ELECTRIC STE-2F1600PD PLATA', precio:74000, 
    categoria: 'Heladeras', image:'https://previews.123rf.com/images/sashkin7/sashkin72005/sashkin7200500011/148030205-vista-frontal-del-moderno-refrigerador-de-acero-inoxidable-de-lado-a-lado-frigor%C3%ADfico-congelador-ais.jpg' , 
    descripcion: 'Sistema Skin Condenser capacidad ùtil total 328 lts vol ùtil refrigerador 249lts vol ùtil freezer 79lts potencia motor 1/4HP eficiencia energetica A freezer independiente con estante divisor de scongelamiento automatico luz interior regulador de temperatura manjas automaticas con dispenser color blanco.'},
    {id:'2', nombre:'HELADERA CICLICO GAFA HGF387AFP PLATA', precio:70000, 
    categoria: 'Heladeras', image:'https://previews.123rf.com/images/alexlmx/alexlmx1505/alexlmx150500208/40398977-refrigerador-negro-moderno-aislado-en-el-fondo-blanco.jpg', 
    descripcion:'Heladera con freezer. capacidad de almacenamiento de 374lts. Freezer extra grande de 120 litros. Ice Twister. Puertas con manija embutida. Estantes de altura regulable. Anaqueles desmontables. Sistem a descong. automatico. Temperatura regulable.' },
    {id:'3', nombre:'HELADERA SKIN CONDENSER STANDARD ELECTRIC STE-2F1600PD PLATA', precio:78000,
    categoria:'Heladeras', image:'https://previews.123rf.com/images/customdesigner/customdesigner1511/customdesigner151100002/48171029-blanco-refrigerador-moderno-aislado-en-blanco-la-pantalla-led-externa-con-brillo-azul-nevera-congela.jpg',
    descripcion:'Sistema Skin Condenser capacidad ùtil total 328 lts vol ùtil refrigerador 249lts vol ùtil freezer 79lts potencia motor 1/4HP eficiencia energetica A freezer independiente con estante divisor de scongelamiento automatico luz interior regulador de temperatura manjas automaticas con dispenser color blanco.'},
    {id:'4', nombre:'SPLIT INVERTER BGH BSI53WCGT', precio:120000, categoria:'AA', image:'http://medias.musimundo.com/medias/00382024-143035-143035-01-143035-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wyNDUwMXxpbWFnZS9qcGVnfGhhYS9oY2UvMTAzODA1MTk3NjgwOTQvMDAzODIwMjQtMTQzMDM1LTE0MzAzNV8wMS0xNDMwMzVfMDEuanBnX3NpemU1MTV8ZWEyMDgyMGQ3ZTViNTI5OTEwZGQzY2FkNzY3NWRiN2M4N2E3ZTM3YjFhMjYwMzA3ZjBjZDNkMmViMmZmYTQyZA',
    descripcion:'Aire acondicionado Split inverter. Frigorias 5300. Calorias 5300. Potencia 1650W. Control remoto. Display. Timer. Funcion sleep. Eficiencia energetica A. Tipo de gas refrigerante R410A.'},
    {id:'5', nombre:'SPLIT BGH BS26WCCR', precio: 100000, categoria:'AA', image:'http://medias.musimundo.com/medias/00193115-136506-136506-01-136506-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wyNjUwMXxpbWFnZS9qcGVnfGg1Yi9oMmUvMTAzNzg5MzA2MTgzOTgvMDAxOTMxMTUtMTM2NTA2LTEzNjUwNl8wMS0xMzY1MDZfMDEuanBnX3NpemU1MTV8YTY4Yzg5OWJjNzg5YjcxYmI4MWQxNTdkNDQxY2RjMmIyNWFlZDJjOTZkMWE1YzRkMzQxZjUwZTc4NjUxN2NhOA',
    descripcion:'Split frio calor de 2700W. Timer. Funcion sleep. Filtro Antibacterias.Deflector de aire movil.Funcion automatico. Funcion Deshumidificacion. autolimpiante. Control de flujo vertical. Funcion ventilacion. Funcion turbo. Hot Start. Control remoto. EE : A'},
    {id:'6', nombre:'SPLIT TCL TACA-3300FCSA/EL', precio:87000, categoria:'AA', image:'http://medias.musimundo.com/medias/00510058-177076-177076-01.png-177076-01.png-size515?context=bWFzdGVyfGltYWdlc3wyMTMzOTh8aW1hZ2UvcG5nfGhlYS9oZTgvMTAzNTU3NDcxNjAwOTQvMDA1MTAwNTgtMTc3MDc2LTE3NzA3Nl8wMS5wbmctMTc3MDc2XzAxLnBuZ19zaXplNTE1fDIyN2VkNzI0OTEzMzQ5ZDAwYjE0YTUwZjVjZTdiN2UyMGU0ZmFjMzcyYWIyYzMwOGYyM2IwOTJjM2YwNmU3OGM',
    descripcion:'Split frio Calor On off 3300 watts equivalente a 2838 frigorias eficiencia A Timer Deshumificador Auto restart modo sueño'},
    {id:'7', nombre:'MOTOROLA MOTO G22 XT-2231-5', precio: 40000, categoria:'Telefonia', image:'http://medias.musimundo.com/medias/00537000-145926-145926-01-145926-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2NTgwNnxpbWFnZS9qcGVnfGhjNi9oZmEvMTAzODQxOTA4NjU0MzgvMDA1MzcwMDAtMTQ1OTI2LTE0NTkyNl8wMS0xNDU5MjZfMDEuanBnX3NpemU1MTV8OTBjZjIzMTgxZmY4YWYzNDA5Y2ZiODhmYTQzOGM3YjkwZjA2ODU0ZmU4ZDE3YzU5NTQ0NmJkNDlhMTdmZjUwMA',
    descripcion:'Celular de 6.53" IPS HD+ (720x1600, 269, HiD, 90 Hz). Procesador MediaTek Helio G37, Octa Core (2.3 GHz). Sistema operativo Android 12. '}     
]

export const getProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            resolve(productos)
        }, 2000)
    })
}
    

