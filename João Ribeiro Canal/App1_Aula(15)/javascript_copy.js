class CompNome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: this.props.nome_inicial
        }
        this.clique = this.clique.bind(this)
    }

    render(){
        return(
            <div>
                <p>Nome: {this.state.nome}</p>
                <button onClick={this.clique}>Alterar!</button>
            </div>
        )
    }

    clique(){
        this.setState({nome: this.props.nome_final})
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <h3>Exercício</h3>
                <hr />
                <CompNome nome_inicial= "João" nome_final="Ribeiro"/>
                <CompNome nome_inicial="Tales" nome_final="Oliver"/>
                <CompNome nome_inicial="Ana" nome_final="Carolina"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))