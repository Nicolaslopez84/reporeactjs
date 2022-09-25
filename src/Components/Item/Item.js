import "./Item.css"//card//

const Item = ({nombre, image, precio, descripcion}) => {
    return (
        <li>
            <img className="item__img" src={image} alt={nombre}></img>
            <div>{nombre}</div>
            <div>${precio}</div>
            <div>{descripcion}</div>
            <button>Ver detalle</button>
        </li>
    )
}

export default Item