import React, { useState, useEffect } from "react";
import { Properties } from "./Form/Properties";
import { Location } from "./Form/Location";
import { Meters2 } from "./Form/Meters2";
import { Button } from "./Form/Button";
import { Price } from "./Form/Price";

export function Form() {
  // Define estados para almacenar datos de categoría "ubicacion" y "propiedad"
  const [ubicacionData, setUbicacionData] = useState([]);
  const [propiedadData, setPropiedadData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud fetch al archivo JSON
    fetch("datos.json")
      .then((response) => response.json())
      .then((data) => {
        // Filtra los datos por categoría
        const ubicacion = data.filter((item) => item.categoria === "ubicacion");
        const propiedad = data.filter((item) => item.categoria === "propiedad");

        setUbicacionData(ubicacion);
        setPropiedadData(propiedad);
      })
      .catch((error) => console.error("Error al cargar los datos", error));
  }, []);

  return (
    <div className=" center div-cotizador">
      <h2 className="center separador">Completa los datos solicitados</h2>
      <Properties datos={propiedadData} />
      <Location datos={ubicacionData} />
      <Meters2 />
      <Button />
      <Price />
    </div>
  );
}

export default Form;