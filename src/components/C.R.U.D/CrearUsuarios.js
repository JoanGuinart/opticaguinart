import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, /* ButtonGroup */ } from "react-bootstrap";
/* import { db, storage } from "../Firebase"; */
import UsersServices from "../services/Users.services";


const AddUsuarios = ({ id, setUserId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("")
  const [message, setMessage] = useState({ error: false, msg: "" });
/*   const [flag, setFlag] = useState(true); */

  /* const [fotoGafa, setfotoGafa] = useState(null)

  const types = ['image/png', 'image/jpeg'] */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (email === "" || password === "" ) {
      setMessage({ error: true, msg: "Todos los campos son obligatorios!" });
      return;
    }
    const newUsuario = {
      email,
      password,
      role
    };
    console.log(newUsuario);

    try {
      if (id !== undefined && id !== "") {
        await UsersServices.updateUsuario(id, newUsuario);
        setUserId("");
        setMessage({ error: false, msg: "Actualizado correctamente!" });
      } else {
        await UsersServices.addUsuarios(newUsuario);
        setMessage({ error: false, msg: "Nueva Gafa añadida correctamente" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setEmail("");
    setPassword("");
    setRole("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await UsersServices.getUsuario(id);
      setEmail(docSnap.data().email);
      setPassword(docSnap.data().password);
      setRole(docSnap.data().role);
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


 /*  const GafaImgHandler = (e) => {
    let selectedFile = e.target.files[0]
    if (selectedFile && types.includes(selectedFile.type)) {
      setfotoGafa(selectedFile);
      setMessage('')
  }
  else {
      setfotoGafa(null);
      setMessage('Please select a valid image type (jpg or png)');
  }
  }
 */


/*   const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`product-images/${fotoGafa.name}`).put(fotoGafa);
    uploadTask.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
    }, err => setMessage(err.message)
        , () => {
            storage.ref('product-images').child(fotoGafa.name).getDownloadURL().then(url => {
                db.collection('Products').add({
                    ProductName: marca,
                    ProductPrice: Number(precio),
                    ProductImg: url
                }).then(() => {
                    setMarca('');
                    setPrecio(0)
                    setfotoGafa('');
                    setMessage('');
                    document.getElementById('file').value = '';
                }).catch(err => setMessage(err.message))
            })
        })
} */


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
              <h3>AÑADIR USUARIOS:</h3>
              <p>***Este apartado aun esta en construcción, servira para añadir usuarios administradores desde mi parte privada de administrador***</p>
            </div>
            <InputGroup>
              <InputGroup.Text id="formGafaMarca">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="EMAIL USUARIO"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGafaModelo">
            <InputGroup>
              <InputGroup.Text id="formGafaModelo">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="PASSWORD USUARIO"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGafaPrecio">
            <InputGroup>
              <InputGroup.Text id="formGafaPrecio">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="ROL USUARIO"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formGafaFoto">
            <InputGroup>
              <InputGroup.Text id="formGafaFoto">E</InputGroup.Text>
              <Form.Control
                type="file"
                id="file"
                onChange={GafaImgHandler}
              />
            </InputGroup>
          </Form.Group> */}

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddUsuarios;
