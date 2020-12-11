class Adicao extends React.Component{
    render(){
        return(
            <div>
                <p>O resultado de {this.props.a} + {this.props.b} = {this.props.a + this.props.b}</p>
                <p>O nome é {this.props.nome}</p>
            </div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<Adicao a={10} b={20} nome={"Oliver"}/>, root)
