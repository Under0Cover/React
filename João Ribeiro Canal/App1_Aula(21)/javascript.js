
class App extends React.Component{
    render(){
        const nomes = [
            'Joao', 
            'Ana', 
            'Carlos'
        ]
        const pessoas = [
            {
                nome: nomes[0],
                profissao: 'Programador'
            },
            {
                nome: nomes[1],
                profissao: 'Professora'
            },
            {
                nome: nomes[2],
                profissao: 'Carpinteiro'
            }
        ]
        const final = pessoas.map(pessoa => <h3>{pessoa.nome} é exerce a profissão de {pessoa.profissao}!</h3>)
        return (
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



let nomes = ['João', 'Ana', 'Carlos']
let final = nomes.map(nome => 'Bom dia, ' + nome)
console.log(nomes)
console.log(final)