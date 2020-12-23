class App extends React.Component{
    constructor(){
        super()
        this.state = {
            nome: "João"
        }
        console.log("constructor")
    }

    componentDidMount(){
        console.log("Montado")
    }

    alterar = () => {
        console.log("Alterar")
        this.setState({nome: "Joaquim"})
    }

    render(){
        console.log("render")
        return(
            <div>
                Olá, {this.state.nome}
                <div>
                    <button onClick={this.alterar}>Alterar</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App cor={true} tamanho={true}/>,
    document.getElementById('root')
)