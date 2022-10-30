import React, { useState } from "react";
import { crearCompra } from "../../Services/Firebase";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../Context/Context";
import { useContext } from "react";
/*import "sweetalert2/src/sweetalert2.scss";*/
import Swal from "sweetalert2"
import InputForm from "./InputForm";

export default function UserForm({ cart, getTotalPrice }) {
  const navigate = useNavigate();
  const {clearCart} = useContext(cartContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    crearCompra(orderData).then((respuesta) => {
      Swal.fire({
        title: "Gracias!",
        text: "Gracias por tu compra",
        icon: "success",
        confirmButtonText: "Cool",
      }).then((result) => {
        navigate(`/thankyou/${respuesta}`);
        clearCart();
        setTimeout (()=> { (navigate(`/`))
          }, 2000)
      });
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <InputForm
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <button type="submit">Crear orden</button>
    </form>
  );
}