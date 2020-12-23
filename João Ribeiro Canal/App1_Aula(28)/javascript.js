class App extends React.Component{
    constructor(){
        super()
        this.state = {
            texto: "Este é o texto da TexteArea"
        }
    }

    alterarTexto = (evento) => {
        this.setState({texto: evento.target.value})
    }

    render(){
        return(
            <div>
                <textarea value={this.state.texto} onChange={this.alterarTexto} cols='20' rows='5'></textarea>
                <h3>O texto é:</h3>
                <p>{this.state.texto}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App cor={true} tamanho={true}/>,
    document.getElementById('root')
)