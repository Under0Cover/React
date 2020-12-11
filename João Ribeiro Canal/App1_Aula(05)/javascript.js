function CompA(props){
    return(
        <div>
            <p>Olá, {props.nome} {props.apelido}.</p>
            <p>Utilizando o 'function'</p>
        </div>
    )
}

class CompB extends React.Component{
    render(){
        return(
            <div>
                <p>Olá novamente, {this.props.nome} {this.props.apelido}</p>
                <p>Utilizando a Classe</p>
            </div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<CompB nome="Tales" apelido="Oliver" />, root)
