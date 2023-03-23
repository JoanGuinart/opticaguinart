import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import GafasDataService from "../services/Gafas.services";

const ListaGafas = ({ getGafaId }) => {
  const [gafas, setGafas] = useState([]);
  useEffect(() => {
    getGafas();
  }, []);

  const getGafas = async () => {
    const data = await GafasDataService.getAllGafas();
    /* console.log("aquiii", data.docs); */
    setGafas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  const deleteHandler = async (id) => {
    await GafasDataService.deleteGafa(id);
    getGafas();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getGafas}>
          Refresh List
        </Button>
      </div>
      

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Marca Gafa</th>
            <th>Modelo Gafa</th>
            <th>Precio</th>
            <th>Url Imagen</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {gafas.map((doc, index) => {
            return (
              <tr key={doc.id}>
                {console.log("id de tot", doc.id)}
                <td>{index + 1}</td>
                <td>{doc.marca}</td>
                <td>{doc.modelo}</td>
                <td>{doc.precio}</td>
                <td className="text-center">
                  <img src={doc.urlImagen} alt="imagen gafa" className="fotoGafaLista"/>
                  </td>
                <td>{doc.disponibilidad}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getGafaId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ListaGafas;