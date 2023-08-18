import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categorias';
import Rodape from './componentes/Rodape';

function App() {

  const categorias = [
    {
      nome: 'Obras de época',
      corPrimaria:'#c4b432',
      corSecundaria: '#fcf3a9'
    },
    {
      nome: 'Doramas',
      corPrimaria:'#bcb7ab',
      corSecundaria: '#fcf6e9'
    },
    {
      nome: 'Romances',
      corPrimaria:'#f7114b',
      corSecundaria: '#ffccd9'
    },
    {
      nome: 'Dramas',
      corPrimaria:'#1a110e',
      corSecundaria: '#9d5f4a'    
    },
    {
      nome: 'Brasileiras',
      corPrimaria:'#4e051c',
      corSecundaria: '#895263'
    }
  ]

  const [series, setSeries] = useState([])

  const aNovaSerieCadastrada = (serie) => {
    setSeries([...series, serie])
  }

  return (
    <div className="App">
     <Banner/>
     <Formulario times={categorias.map(categoria => categoria.nome)} aSerieCadastrada={serie => aNovaSerieCadastrada(serie)}/>

    {categorias.map(categoria => <Categoria
      key={categoria.nome} 
      nome={categoria.nome} 
      corPrimaria={categoria.corPrimaria} 
      corSecundaria={categoria.corSecundaria}
      series={series.filter(serie => serie.categoria === categoria.nome)}
      />)}
     
     <Rodape/>
    </div>
  );
}

export default App;
