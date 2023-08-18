import Serie from '../Serie'
import './Categorias.css'

const Categoria = (props) => {
    return (
        (props.series.length > 0) ? <section className='categoria' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='series'>
                {props.series.map( serie => <Serie corDeFundo={props.corPrimaria} key={serie.nome} nome={serie.nome} descricao={serie.descricao} imagem={serie.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Categoria