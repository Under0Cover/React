class App extends React.Component{
    constructor(){
        super()
        this.state = {
            nome: 'Tales'
        }
    }

    render(){
        this.state.nome = "Oliver"
        return(
            <div>
                <p>Nome: {this.state.nome}</p>
                <p>Idade: {this.props.idade}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App idade='36'/>,
    document.getElementById('root')
)