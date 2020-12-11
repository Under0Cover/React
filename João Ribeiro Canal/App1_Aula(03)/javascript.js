function MeuComponente() {
    var nome = "Tales"
    var apelido = "Oliver"

    return (
        <div>
            <h1>Olá React!</h1>
            <p>O meu nome é {nome} {apelido}</p>
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<MeuComponente />, root)