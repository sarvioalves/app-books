import { Link } from "react-router-dom"
import styled from "styled-components"

const Opcao = styled.li`
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    min-width: 120px;
    height: 100px;
`
const Opcoes = styled.ul`
    display: flex;
`
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader