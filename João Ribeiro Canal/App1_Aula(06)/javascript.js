function ComA(props){
    return(
        <div>
            <p>Nome: {props.nome}</p>
        </div>
    )
}

function App(){
    return(
        <div>
            <ComA nome="Ana"/>
            <ComA nome="Beatriz"/>
            <ComA nome="Claudia"/>
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root)
