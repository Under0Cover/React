import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer'

/*function App() {
  return (
    <div>
      
    </div>
  );
}*/

class App extends React.Component {
  render() {
    return (
      <div>
        <Headers />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
