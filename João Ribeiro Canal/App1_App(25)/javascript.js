class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let corFonte = this.props.corFonte ? 'cor-vermelho' : ''
        let tamanho = this.props.tamanho ? 'tamanho' : ''
        let fundo = this.props.fundo ? 'fundo' : ''
        return(
            <div>
                <p className={`${corFonte} ${tamanho} ${fundo}`}>Texto com estilo!</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App corFonte={true} tamanho={true} fundo={false}/>,
    document.getElementById('root')
)