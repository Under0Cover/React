import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Título do Artigo</h1>
          <p className="lead">Aqui é o conteúdo do Artigo. E este é o primeiro artigo meu criado dentro do React!:D</p>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Article;