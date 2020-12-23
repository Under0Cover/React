class App extends React.Component{
    constructor(){
        super()
        this.state = {
            itemSelecionado: 'item04'
        }
    }

    alterarItem = evento => {
        this.setState({itemSelecionado: evento.target.value})
    }

    render(){
        return(
            <div>
                <select value={this.state.itemSelecionado} onChange={this.alterarItem}>
                    <option value='item01'>Item 01</option>
                    <option value='item02'>Item 02</option>
                    <option value='item03'>Item 03</option>
                    <option value='item04'>Item 04</option>
                </select>
                <p>Item selecionado: {this.state.itemSelecionado}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App cor={true} tamanho={true}/>,
    document.getElementById('root')
)