// Parent
class App extends React.Component{
    metodo(){
        console.log('Olá, Pai!')
    }

    metodo2(){
        console.log('Olá, Mundo!')
    }
    
    render(){
        return(
            <div>
                <p>Texto do Componente Pai</p>
                <CompA clique={this.metodo} clique_dois={this.metodo2}/>
            </div>
        )
    }
}

// Child
class CompA extends React.Component{
    render(){
        return(
                <div>
                    <button onClick={this.props.clique}>Clicar</button>
                    <button onClick={this.props.clique_dois}>Clicar</button>
                </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)