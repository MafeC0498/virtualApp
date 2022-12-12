import axios from "axios"
import { Col, Container, Row } from "react-bootstrap"
import CrearProductoFormulario from "../components/CrearProductoFormulario"
import { CREARPRODUCTO_GET_ENDPOINT } from "../conecctions/endpoints"
import { useNavigate } from "react-router-dom"

const CrearProducto= ()=>{

    const navegar= useNavigate()

    const Crear= (producto)=>{
        axios.post(CREARPRODUCTO_GET_ENDPOINT)
        .then(respuesta=>{
            console.log(respuesta.data)
            navegar("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <Container className="mt-3 mb-3 text-center">
            <h3>Crear Producto</h3>
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <Row className="justifi-content-center">
                        <CrearProductoFormulario callback={Crear} />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default CrearProducto;