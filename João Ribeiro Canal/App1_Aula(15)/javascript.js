class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome01: "Tales",
            nome02: "Mariana",
            nome03: "Patrícia"
        }
        this.click01 = this.click01.bind(this)
        this.click02 = this.click02.bind(this)
        this.click03 = this.click03.bind(this)
    }

    click01(){
        this.setState({nome01: 'Oliver'})
    }

    click02(){
        this.setState({nome02: 'Janaína'})
    }

    click03(){
        this.setState({nome03: 'Marcela'})
    }

    render(){
        return(
            <div>
                <p>Nome: {this.state.nome01}</p>
                <button onClick = {this.click01}>Altere</button>
                <hr />
                <p>Nome: {this.state.nome02}</p>
                <button onClick = {this.click02}>Altere</button>
                <hr />
                <p>Nome: {this.state.nome03}</p>
                <button onClick = {this.click03}>Altere</button>
            </div>
        )
    }


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)