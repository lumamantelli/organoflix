import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const categorias = [
        'Obras de época',
        'Doramas',
        'Romances',
        'Dramas',
        'Brasileiras'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Preencha o formulário para criar o card da sua série favorita.</h2>
            <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite o nome da série'/>
            <CampoTexto obrigatorio={true} label='Descrição' placeholder='Digite uma descrição'/>
            <CampoTexto label='Imagem'placeholder='Digite a url da imagem'/>
            <ListaSuspensa obrigatorio={true} label='Categoria' itens={categorias}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario