import { livros } from "./dadosUltimosLacamentos"
import imagemLivro from "../../imagens/livro2.png"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import styled from "styled-components"

const UltimosLacamentosContainer = styled.section`
    background-color: #EBECEE;
    display: flex;
    flex-direction: column;
    padding: 0 0 50px 0;
    margin-top: 0;
`
const NovosLivrosContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    cursor: pointer;
`

function UltimosLacamentos() {
    return (
        <UltimosLacamentosContainer>
            <Titulo
                cor="#fa7d00"
                tamanhoFonte="36px">
                Últimos Laçamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt="livro" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />

        </UltimosLacamentosContainer>
    )
}

export default UltimosLacamentos