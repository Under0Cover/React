class App extends React.Component{
    render(){
        const nomes = ['João', 'Ana', 'Carlos', 'Ana']
        const final = nomes.map((nome, index) => <h3 key={index}>{index + 1} - {nome}</h3>)
        return(
            <div>
                {final}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)