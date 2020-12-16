class App extends React.Component{
    clique = (texto) => {
        console.log(texto)
    }

    render(){
        return(
            <div>
                <button onClick={() => this.clique('Olá mundo')}>Clicar</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)