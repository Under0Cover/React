class Identificacao extends React.Component{
    constructor(){
        super()
        this.state = {
            nome: 'Tales Oliver',
            idade: 36            
        }
    }
    render(){
        return(
            <div>
                <Nome nome={this.state.nome}/>
                <Idade idade={this.state.idade} />
            </div>
        )
    }
}

class Nome extends React.Component{
    render(){
        return(
            <p>Nome: {this.props.nome}</p>
        )
    }
}

class Idade extends React.Component{
    render(){
        return(
            <p>Idade: {this.props.idade}</p>
        )
    }
}

ReactDOM.render(
    <Identificacao />,
    document.getElementById('root')
)