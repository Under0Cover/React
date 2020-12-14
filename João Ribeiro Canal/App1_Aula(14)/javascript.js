class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: "Tales"
        }
        this.cmd_click = this.cmd_click.bind(this)
    }

    cmd_click(){
        this.setState({nome: 'Oliver'})
    }

    render(){
        return(
            <div>
                <p>Nome: {this.state.nome}</p>
                <button onClick={this.cmd_click}>Clique aqui!</button>
            </div>
        )
    }


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)