class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let estilo = {
            color: "blue",
            fontSize: '4em'
        }

        let estilo2 = {
            border: '2px solid black'
        }

        return(
            <div>
                <p style={estilo}>Texto com estilo!</p>
                <p style={estilo2}>Texto com estilo 2!</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)