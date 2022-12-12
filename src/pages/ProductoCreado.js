import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { PRODUCTOSCREADOS_GET_ENDPOINT } from "../conecctions/endpoints"
import ProductoCard from "../components/ProductoCard"

const ProductoCreado= ()=>{

    const [productos, setProductos]= useState([])

    useEffect(()=>(
        axios.get(PRODUCTOSCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
            setProductos(respuesta.data)
        })
        .catch(err =>{
            console.log(err)
        })
    ),[])

    return(
        <Container className="mt-3 mb-3 text-center">
            <h3>Productos Creados</h3>
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <Row className="justify-content-center">
                        {productos.map(producto=> <ProductoCard key={producto.idProducto} producto={producto} /> )}
                    </Row>
                </Col>
            </Row> 
        </Container>
    );
}

export default ProductoCreado;