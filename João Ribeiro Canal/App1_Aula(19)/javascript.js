// Parent
class App extends React.Component{
    metodo(texto){
        console.log(texto)
    }
    
    render(){
        return(
            <div>
                <p>Texto do Componente Pai</p>
                <Child evento={this.metodo}/>
            </div>
        )
    }
}

// Child
class Child extends React.Component{
    render(){
        return(
                <div>
                    <button onClick={() => this.props.evento('Olá, Mundo!')}>Clicar</button>
                </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)