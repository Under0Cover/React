class App extends React.Component{
    constructor(){
        super()
        this.state= {
            nome: 'João'
        }
    }

    alterarNome = (evento) => {
        this.setState({nome: evento.target.value})
    }

    render(){
        return(
            <div>
                <input type='text' value={this.state.nome} onChange={this.alterarNome}/>
                <p>Valor: {this.state.nome}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App cor={true} tamanho={true}/>,
    document.getElementById('root')
)