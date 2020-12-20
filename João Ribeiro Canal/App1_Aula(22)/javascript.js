class App extends React.Component{
    render(){
        const noticias = [
            {
                titulo: "Notícia 01",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec risus id lacus tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae mi in lectus sagittis ornare. Curabitur sit amet eleifend neque. Nam odio augue, commodo sit amet aliquet et, volutpat ut tellus. Nulla et felis elit. Duis nec ornare libero. Nullam tempus lorem quis dignissim imperdiet. Aenean sollicitudin congue arcu, sed euismod erat tempus non. Duis et sem felis. Sed magna ipsum, imperdiet in est ut, auctor auctor turpis. Cras ut velit accumsan, suscipit mi dictum, fermentum orci.",
                autor: "Tales Oliver"
            },
            {
                titulo: "Notícia 02",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec risus id lacus tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae mi in lectus sagittis ornare. Curabitur sit amet eleifend neque. Nam odio augue, commodo sit amet aliquet et, volutpat ut tellus. Nulla et felis elit. Duis nec ornare libero. Nullam tempus lorem quis dignissim imperdiet. Aenean sollicitudin congue arcu, sed euismod erat tempus non. Duis et sem felis. Sed magna ipsum, imperdiet in est ut, auctor auctor turpis. Cras ut velit accumsan, suscipit mi dictum, fermentum orci.",
                autor: "José Medeiros"
            },
            {
                titulo: "Notícia 03",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec risus id lacus tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae mi in lectus sagittis ornare. Curabitur sit amet eleifend neque. Nam odio augue, commodo sit amet aliquet et, volutpat ut tellus. Nulla et felis elit. Duis nec ornare libero. Nullam tempus lorem quis dignissim imperdiet. Aenean sollicitudin congue arcu, sed euismod erat tempus non. Duis et sem felis. Sed magna ipsum, imperdiet in est ut, auctor auctor turpis. Cras ut velit accumsan, suscipit mi dictum, fermentum orci.",
                autor: "Paulo Guimarães"
            }
        ]

        // Preparação do Component Child Notícia
        const final = noticias.map(reportagem => <Jornal noticia = {reportagem} />)

        return(
            <div>
                <h2>Notícias</h2>
                <hr />
                {final}
            </div>
        )
    }
}

class Jornal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>{this.props.noticia.titulo}</h3>
                <p>{this.props.noticia.texto}</p>
                <small>{this.props.noticia.autor}</small>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)