class App extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    alterarUsername = evento => {
        this.setState({username: evento.target.value})
    }

    alterarPassword = evento => {
        this.setState({password: evento.target.value})
    }

    submmitiForm = evento => {
        console.log("Username: " + this.state.username)
        console.log("Password: " + this.state.password)
        evento.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.submmitiForm}>
                <input type='text' value={this.state.username} onChange={this.alterarUsername} placeholder="Username"/>
                <br />
                <input type='password' value={this.state.password} onChange={this.alterarPassword} placeholder="Password"/>
                <br />
                <input type="submit" value={`Entrar`} />
            </form>
        )
    }
}

ReactDOM.render(
    <App cor={true} tamanho={true}/>,
    document.getElementById('root')
)