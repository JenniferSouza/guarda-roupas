import React from 'react';

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
        <div>
          <div className="shirt">
            {this.state.shirt === null ?
              <p>Selecione uma camisa!</p> : <img style={{ width: 50, height: 50 }}
                alt="imagem da camisa que você selecionou"
                src={this.state.shirt} />
            }
          </div>
          <div className="pant">
            {this.state.pant === null ? <p>Selecione uma calça!</p> : <img style={{ width: 50, height: 50 }} alt="imagem da calça que você selecionou" src={this.state.pant} />}
          </div>
          <div className="sneaker">
            {this.state.sneaker === null ? <p>Selecione um tênis!</p> : <img style={{ width: 50, height: 50 }} alt="imagem do tênis que você selecionou" src={this.state.sneaker} />}
          </div>
        </div>
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
            <button onClick={() => { this.setState({ pant: 'images/sweat-pants.svg', pantId: 3 }) }}>Calça de Moletom</button>
          </div>

          <div><p>Selecione o modelo do tênis</p></div>
          <div>
            <button onClick={() => { this.setState({ sneaker: 'images/green-sneaker.svg', sneakerId: 1}) }}>Tênis verde</button>
            <button onClick={() => { this.setState({ sneaker: 'images/red-sneaker.svg', sneakerId: 2}) }}>Tênis vermelho</button>
            <button onClick={() => { this.setState({ sneaker: 'images/brown-sneaker.svg', sneakerId: 3}) }}>Tênis marrom</button>
          </div>

          <button onClick={() => { console.log("Camisa: "+this.state.shirtId+"\nCalça: "+this.state.pantId+"\nTênis: "+this.state.sneakerId) }}>Salvar</button>
        </div>
      </div>
    );
  }
}