class CompA extends React.Component{
    render(){
        return(
            <div className="red">
                <p>Texto do Componente A</p>
            </div>
        )
    }
}

class CompB extends React.Component{
    render(){
        return(
            <div className="green">
                <p>Texto do Componente B</p>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <CompA />
                <CompB />
            </div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root)
