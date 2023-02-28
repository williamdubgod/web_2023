import './App.css';
import carro from './img/carro.avif'
import Lista from './componente/ListaCarros.js'

export default function App() {
  const marca = 'Honda';
  const modelo = "Civic";
  const marcas = ['BMW, ', 'Mercedes, ', 'Audi'];
  const valor = 143960 + 45000;

  return (
    <>
    <h1>Auto</h1>
    <img src={carro} className="App-logo" width="300px" height="200px" alt="imagem carro" />
    <br/>
    <p>Marca: <b>{marca}</b></p>
    <p>Modelo: <b>{modelo}</b></p>
    <p>Marcas: <b>{marcas}</b></p>
    <p>Valor: <b>{valor}</b></p>

    <button onClick="clique()">Comprar</button>

    <select>
      <option value="valor1">Audi</option>
      <option value="valor2">BMW</option>
      <option value="valor3">Mercedes</option>
      <option value="valor4">Honda</option>
    </select>

    <Lista marcas={marcas}/>
    </>

  );
}


