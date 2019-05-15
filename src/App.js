import React from 'react';
import Look from '../src/components/Look';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shirt: null,
      pant: null,
      sneaker: null,
      shirtId: null,
      pantId: null,
      sneakerId: null
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Look pant={this.state.pant} shirt={this.state.shirt} sneaker={this.state.sneaker}/> {/*chamada do componente*/}
        <div>
          <div><p>Selecione o modelo da camisa</p></div>
          <div>
            <button onClick={() => { this.setState({ shirt: 'images/white-shirt.svg', shirtId: 1 }) }}>Camisa branca</button>
            <button onClick={() => { this.setState({ shirt: 'images/orange-shirt.svg', shirtId: 2 }) }}>Camisa laranja</button>
            <button onClick={() => { this.setState({ shirt: 'images/red-shirt.svg', shirtId: 3 }) }}>Camisa vermelha</button>
          </div>

          <div><p>Selecione o modelo da calça</p></div>
          <div>
            <button onClick={() => { this.setState({ pant: 'images/brown-pants.svg', pantId: 1 }) }}>Calça Marrom</button>
            <button onClick={() => { this.setState({ pant: 'images/jeans-pants.svg', pantId: 2 }) }}>Calça Jeans</button>
            <button onClick={() => { this.setState({ pant: 'images/sweat-pants.svg', pantId: 3 }) }}>Calça de Vermelha</button>
          </div>

          <div><p>Selecione o modelo do tênis</p></div>
          <div>
            <button onClick={() => { this.setState({ sneaker: 'images/green-sneaker.svg', sneakerId: 1 }) }}>Tênis verde</button>
            <button onClick={() => { this.setState({ sneaker: 'images/red-sneaker.svg', sneakerId: 2 }) }}>Tênis vermelho</button>
            <button onClick={() => { this.setState({ sneaker: 'images/brown-sneaker.svg', sneakerId: 3 }) }}>Tênis marrom</button>
          </div>

          <button onClick={() => { console.log("Camisa: " + this.state.shirtId + "\nCalça: " + this.state.pantId + "\nTênis: " + this.state.sneakerId) }}>Salvar</button>
        </div>
      </div>
    );
  }
}