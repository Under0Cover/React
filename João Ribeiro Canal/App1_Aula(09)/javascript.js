function Tempo(){
    const conteudo = (
        <div>
            <h3>Hora certa!</h3>
            <p>Hora atual: {new Date().toLocaleTimeString()}</p>
        </div>
    )
    ReactDOM.render(conteudo, document.getElementById('root'))
}

setInterval(Tempo, 1000)