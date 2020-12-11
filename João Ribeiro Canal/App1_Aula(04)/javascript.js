class CompA extends React.Component{
    render(){
        return(
            <div>
                <h3>Componente A</h3>
                <p>Aprendendo a utilizar as Classes em React!</p>
            </div>
        )
    }
}

class CompB extends React.Component{
    render(){
        return(
            <div>
                <h3>Componente B</h3>
                <p>Renderizando dois componentes em um terceiro!</p>
            </div>
        )
    }
}

class MeusComponentes extends React.Component{
    render(){
        return(
            <div>
                <CompA />
                <hr />
                <CompB />
                <hr />
                <p>Deu tudo certo!</p>
            </div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<MeusComponentes />, root)