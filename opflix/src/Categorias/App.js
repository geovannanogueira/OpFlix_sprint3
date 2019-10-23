import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../assets/Logos/vermelho.png';
import Axios from 'axios';

export default class Categorias extends React.Component {

    constructor() {
        super();
        this.state = {
            nome: "",
            duracao: "",
            classificacao: "",
            dataLancamento: "",
            sinopse: "",
            plataforma: "",
            categoria: "",
            tipo: "",
            imagem: "",
            lista: []
        }
    }

    estadoNome = (event) => {
        this.setState({ nome: event.target.value })
        console.log(this.state.nome)
    }

    estadoDuracao = (event) => {
        this.setState({ duracao: event.target.value })
        console.log(this.state.duracao)

    }

    estadoClassificacao = (event) => {
        this.setState({ classificacao: event.target.value })
        console.log(this.state.classificacao)

    }

    estadoDataLancamento = (event) => {
        this.setState({ dataLancamento: event.target.value })
        console.log(this.state.dataLancamento)

    }

    estadoSinopse = (event) => {
        this.setState({ sinopse: event.target.value })
        console.log(this.state.sinopse)

    }

    estadoPlataforma = (event) => {
        this.setState({ plataforma: event.target.value })
        console.log(this.state.plataforma)
        
    }

    estadoCategoria = (event) => {
        this.setState({ categoria: event.target.value })
        console.log(this.state.categoria)

    }

    estadoTipo = (event) => {
        this.setState({ tipo: event.target.value })
        console.log(this.state.tipo)

    }

    estadoImagem = (event) => {
        this.setState({ imagem: event.target.value })
        console.log(this.state.imagem)

    }

    Cadastrar = (event) => {
        event.preventDefault();

        // Axios.post("http://localhost:5000/api/lancamentos",{
        //     headers: {
        //         authorization: "Bearer " + localStorage.getItem("usuario-opflix")
        //     },
        //     nome: this.state.nome,
        //     duracao: this.state.duracao,
        //     classificacao: this.state.classificacao,
        //     dataLancamento: this.state.dataLancamento,
        //     sinopse: this.state.sinopse,
        //     plataforma: this.state.plataforma,
        //     categoria: this.state.categoria,
        //     tipo: this.state.tipo
        // })

        fetch("http://localhost:5000/api/lancamentos", {
            method: "POST",
            body: JSON.stringify({
                nome: this.state.nome,
                duracaoMin:this.state.duracao,
                classificacao: this.state.classificacao,
                dataLancamento: this.state.dataLancamento,
                sinopse: this.state.sinopse,
                idPlataforma: this.state.plataforma,
                idGenero: this.state.categoria,
                idTipo: this.state.tipo,
                imagem: this.state.imagem
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("usuario-opflix")
            }
        })
        .then(console.log("deu certo!"))

            .catch(erro => {
                console.log(erro);
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
                    <h1>Categorias</h1>
                    <h1>Lançamentos</h1>
                    <form onSubmit={this.Cadastrar}>

                        <div>
                            <input className="input_cadastroL" placeholder="Nome" type="text" name="username" id="cadastro_nomeL" onChange={this.estadoNome} />
                        </div>
                        <div>
                            <input className="input_cadastroL" placeholder="Duracao" type="number" name="username" id="cadastro_duracaoL" onChange={this.estadoDuracao} />
                        </div>
                        <div>
                            <input className="input_cadastroL" placeholder="Classificacao" type="text" name="username" id="cadastro_classificacaoL" onChange={this.estadoClassificacao} />
                        </div>
                        <div>
                            <input className="input_cadastroL" placeholder="Data de Lancamento" type="date" name="date" id="cadastro_dataL" onChange={this.estadoDataLancamento} />
                        </div>
                        <div>
                            <input className="input_cadastroL" placeholder="Sinopse" type="text" name="username" id="cadastro_sinopseL" onChange={this.estadoSinopse} />
                        </div>
                        <div>
                            <input className="input_cadastroL" placeholder="Plataforma" type="number" name="username" id="cadastro_plataformaL" onChange={this.estadoPlataforma} />
                        </div>
                        <div>
                            <input className="input_cadastroL" placeholder="Genero" type="number" name="username" id="cadastro_generoL" onChange={this.estadoCategoria} />
                        </div>
                        <div>
                            <input className="input_cadastroL" placeholder="Tipo" type="number" name="text" id="cadastro_tipoL" onChange={this.estadoTipo} />
                        </div>
                        <div>
                            <input className="input_imagemL" placeholder="Imagem" type="" name="text" id="cadastro_imagemL" onChange={this.estadoImagem} />
                        </div>
                        <div className="botaoL">
                            <button className="btn_cadastroL" id="botao_cadastroL">Cadastrar Lançamento</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}