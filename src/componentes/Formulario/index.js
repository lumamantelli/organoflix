import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aSerieCadastrada({
            nome,
            descricao,
            imagem,
            categoria
        })
        setNome('')
        setDescricao('')
        setImagem('')
        setCategoria('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Preencha o formulário para criar o card da sua série favorita.</h2>
            <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite o nome da série'
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label='Descrição' 
                placeholder='Digite uma descrição'
                valor={descricao}
                aoAlterado={valor => setDescricao(valor)}
            />
            <CampoTexto 
                label='Imagem'
                placeholder='Digite a url da imagem'
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa
                obrigatorio={true}
                label="Categorias" 
                itens={props.categorias}
                valor={categoria}
                aoAlterado={valor => setCategoria(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario