class App extends React.Component{
    constructor(){
        super()
        this.state = {
            nome: "Oliver"
        }
    }

    clique = () => {
        this.setState({nome: "Tales"})
    }

    render(){
        return(
            <div>
                <p>Nome: {this.state.nome}</p>
                <button onClick={this.clique}>Alterar</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)