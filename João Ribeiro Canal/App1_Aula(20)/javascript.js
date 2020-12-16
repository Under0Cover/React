// Parent
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            tempoBom: true
        }
    }
    render(){
        return (
            this.state.tempoBom && <p>O tempo está ótimo!</p>
        )




        // Circuito Pequeno
        return this.state.tempoBom && <p>O tempo está ótimo.</p>




        // Utilizando método ternário
        //return(
        //    this.state.tempoBom ?
        //    <p>O tempo está ótimo!</p> :
        //    <p>O tempo está péssimo!</p>
        //)




        // Utilizando Variavéis
        //let texto
        //if (this.state.tempoBom){
        //    texto = <p>O tempo está ótimo!</p>
        //} else {
        //    texto = <p>O tempo está péssimo!</p>
        //}
        //return texto




        // Utilizando IF-ELSE
        //if (this.state.tempoBom){
        //    return <p>O tempo está ótimo.</p>
        //} else{
        //    return <p>O tempo está péssimo.</p>
        //}
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)