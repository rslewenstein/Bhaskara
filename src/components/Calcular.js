import React, { Component } from 'react'
import './Calcular.css'
import imagem from '../img/bhaskara.jpg'

export default class Calcular extends Component {

    constructor(props){
        super(props);

        this.state = {
            v_a: 0,
            v_b: 0,
            v_c:0,
            res_d:0,
            x_1:0,
            x_2:0
            
        }

        this.calcDelta = this.calcDelta.bind(this);
    }
    
    calcDelta(){
        let totDelta = (this.state.v_b * this.state.v_b) - (4 * this.state.v_a * this.state.v_c)
        let td = this.state
        td.res_d = totDelta
        let totX1 = (-this.state.v_b + (Math.sqrt(td.res_d))) / 2 * this.state.v_a
        let totX2 = (-this.state.v_b - (Math.sqrt(td.res_d))) / 2 * this.state.v_a
        td.x_1 = totX1
        td.x_2 = totX2
        this.setState(td)
    }

    render(){
        return(
            <div className="calc">
                <h1>Cálculo da fórmula de Bhaskara</h1>
                <h3>Para resolvermos a equação do 2º grau(a² + bx + cx = 0), utilizamos a fórmula de Bhaskara</h3>
                <img src={imagem} />
                
                <div className="texto">
                    Digite o valor de "a": <input type="text" onChange={(event)=>{this.setState({v_a:event.target.value})}}></input><br />
                    Digite o valor de "b": <input type="text" onChange={(event)=>{this.setState({v_b:event.target.value})}}></input><br />
                    Digite o valor de "c": <input type="text" onChange={(event)=>{this.setState({v_c:event.target.value})}}></input><br />
                </div>
                
                <div className="botao">
                    <input type="button" value="Calcular" onClick={this.calcDelta}></input> <br />
                </div>

                <div className="resultado">
                    <h3>Valor de Delta: {this.state.res_d}</h3>
                    <h3>Valor da raiz 1: {this.state.x_1}</h3>
                    <h3>Valor da raiz 2: {this.state.x_2}</h3>
                </div>
            </div>
        )
    }
}