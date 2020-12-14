class App extends React.Component{
    render(){
        const estilo = {color: 'white', backgroundColor: 'black', padding: '20px'}
        return(
            <div>
                <p style={{color: "red", backgroundColor: "yellow", padding: "20px", textAlign: "center"}}>CSS inline dentro do render!</p>
                <p style={estilo}>CSS como constante dentro do render!</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)