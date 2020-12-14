class App extends React.Component{
    constructor(){
        super()
        this.state = {
            nome: 'Tales',
            idade: 36
        }
    }

    render(){
        return(
            <div>
                <p>Nome: {this.state.nome} {this.props.apelido}</p>
                <p>Idade: {this.state.idade}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App apelido="Oliver"/>,
    document.getElementById('root')
)