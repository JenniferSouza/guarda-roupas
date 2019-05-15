import React from 'react'

export default class Look extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.shirt === null ? <p>Selecione uma camisa!</p> : <img style={{ width: 50, height: 50 }} alt="imagem da camisa que você selecionou" src={this.props.shirt} />}
                </div>
                <div>
                    {this.props.pant === null ? <p>Selecione uma calça!</p> : <img style={{ width: 50, height: 50 }} alt="imagem da calça que você selecionou" src={this.props.pant} />}
                </div>
                <div>
                    {this.props.sneaker === null ? <p>Selecione um tênis!</p> : <img style={{ width: 50, height: 50 }} alt="imagem do tênis que você selecionou" src={this.props.sneaker} />}
                </div>
            </div>
        )
    }
}