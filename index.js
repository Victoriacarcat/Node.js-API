import express from "express";
import fs from "fs"; // va a permitir trabajar con file system, es decir con los archivos que están en la carpeta del proyecto
import bodyParser from "body-parser";

const app=express(); //objeto de la app de servidor
app.use(bodyParser.json());// para que 

const leerDatos = () => {
    try {
        const data = fs.readFileSync("./bd.json");
        return (JSON.parse(data));
    } catch (error) {
        console.log(error);
    }
};

const insertarDatos = (data) => {
    try {
        fs.writeFileSync("./bd.json",JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

app.get("/", (req,res) => {
    res.send("Bienvenido a la API con Node.")
});

//Endpoints
app.get("/libros", (req,res)=>{//Tomar los libros
    const data= leerDatos();
    res.json(data.libros);
});

//obtener libro por id
app.get("/libros/:id", (req,res)=>{
    const data=leerDatos();
    const id=parseInt(req.params.id);
    const libro = data.libros.find((libro) => libro.id === id);
    res.json(libro);

});

//Insertar libro
app.post("/libros", (req,res) =>{
    const data= leerDatos();
    const body=req.body;
    const nuevoLibro={
        id: data.libros.length+1,
        ...body,

    };
    data.libros.push(nuevoLibro);
    insertarDatos(data);
});

//Actualizar un libro
app.put("/libros/:id", (req,res) =>{
    const data= leerDatos();
    const body=req.body;
    const id=parseInt(req.params.id);
    const libroIndice=data.libros.findIndex((libro)=> libro.id === id);
    data.libros[libroIndice] ={
        ...data.libros[libroIndice],
        ...body,
    };
    insertarDatos(data);
    res.json({ message: "El libro fue actualizado correctamente"});
});

//Borrar un libro
app.delete("/libros/:id", (req,res)=>{
    const data= leerDatos();
    const id=parseInt(req.params.id);
    const libroIndice=data.libros.findIndex((libro)=> libro.id === id);
    data.libros.splice(libroIndice,1);
    insertarDatos(data);
    res.json({ message: "El libro fue eliminado correctamente"});
    
});

app.listen(3000, () => {
    console.log("El servidor está escuchando en el puerto 3000");
});//El servidor está escuchando