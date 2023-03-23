import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
/* import { db, storage } from "../Firebase"; */
import GafasDataService from "../../components/services/Gafas.services";

const AddGafas = ({ id, setGafaId }) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [precio, setPrecio] = useState();
  const [urlImagen, setUrlImagen] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("En stock");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [flag, setFlag] = useState(true);

  /* const [fotoGafa, setfotoGafa] = useState(null)

  const types = ['image/png', 'image/jpeg'] */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (marca === "" || modelo === "" || precio === "") {
      setMessage({ error: true, msg: "Todos los campos son obligatorios!" });
      return;
    }
    const newGafa = {
      marca,
      modelo,
      disponibilidad,
      precio,
      urlImagen,
    };
    console.log(newGafa);

    try {
      if (id !== undefined && id !== "") {
        await GafasDataService.updateGafa(id, newGafa);
        setGafaId("");
        setMessage({ error: false, msg: "Actualizado correctamente!" });
      } else {
        await GafasDataService.addGafas(newGafa);
        setMessage({ error: false, msg: "Nueva Gafa añadida correctamente" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setMarca("");
    setModelo("");
    setPrecio("");
    setUrlImagen("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await GafasDataService.getGafa(id);
      setMarca(docSnap.data().marca);
      setModelo(docSnap.data().modelo);
      setPrecio(docSnap.data().precio);
      setUrlImagen(docSnap.data().urlImagen);
      setDisponibilidad(docSnap.data().disponibilidad);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGafaMarca">
            <div>
              <h3>AÑADIR GAFAS:</h3>
            </div>
            <InputGroup>
              <InputGroup.Text id="formGafaMarca">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Marca gafa"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGafaModelo">
            <InputGroup>
              <InputGroup.Text id="formGafaModelo">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Modelo gafa"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGafaPrecio">
            <InputGroup>
              <InputGroup.Text id="formGafaPrecio">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Precio gafa"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGafaImagen">
            <InputGroup>
              <InputGroup.Text id="formGafaImagen">D</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="URL Imagen Gafa"
                value={urlImagen}
                onChange={(e) => setUrlImagen(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setDisponibilidad("En stock");
                setFlag(true);
              }}
            >
              En stock
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setDisponibilidad("A Encarrec");
                setFlag(false);
              }}
            >
              A Encargo
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add / Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddGafas;
