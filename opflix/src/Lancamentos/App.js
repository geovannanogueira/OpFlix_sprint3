import React from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios'

import { parseJwt } from '../services/auth.js'
import logo from '../assets/Logos/vermelho.png';

export default class Lancamentos extends React.Component {

    constructor() {
        super()
        this.state = {
            lista: [],
            emailUsuario: null
        }
    }

    componentDidMount() {
        this.listarLancamentos();
        this.setState({ emailUsuario: parseJwt().nomeUsuario })
    }

    listarLancamentos = () => {
        Axios.get('http://localhost:5000/api/lancamentos', {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(response => {
                this.setState({ lista: response.data })
                console.log({ lista: response.data })
            })
    }

    render() {
        return (
            <div className="App">
                <header className="container">
                    <img src={logo} />
                    <nav className="barra_nav">
                        <Link to='/categorias'>Categorias</Link>
                        <Link to='/lancamentos'>Lançamentos</Link>
                    </nav>
                </header>
                <section className="conteudo">
                    Olá, {this.state.emailUsuario}

                    <h1>Tendências</h1>

                    <table className="table table-sm table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Duração por minuto</th>
                                <th scope="col">Classificação</th>
                                <th scope="col">Data de Lançamentos</th>
                                <th scope="col">Sinopse</th>
                                <th scope="col">IdPlataforma</th>
                                <th scope="col">IdGenero</th>
                                <th scope="col">IdTipo</th>
                                <th scope="col">Imagem</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lancamentos-corpo">
                            {this.state.lista.map(element => {
                                return (
                                    <tr key={element.idLancamento}>
                                        <td>{element.nome}</td>
                                        <td>{element.duracaoMin}</td>
                                        <td>{element.classificacao}</td>
                                        <td>{element.dataLancamento}</td>
                                        <td>{element.sinopse}</td>
                                        <td>{element.idPlataforma}</td>
                                        <td>{element.idGenero}</td>
                                        <td>{element.idTipo}</td>
                                        <td><img src={element.imagem} /></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </div>
        );

    }
}