import Banner from "./components/Banner";
import Card from "./components/Card";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/Header";
import {Componente1, Componente2, Componente3 } from "./components/VariosComponentes";
import CardDinamico from "./components/CardDinamico";

const App = () => {
  return ( 
    <>
      <h1>Importando componentes:</h1>
      <Header />
      <Banner />
      <hr />
      <h1>Varios componentes no mesmo arquivo:</h1>
      <Componente1 />
      <Componente2 />
      <Componente3 />
      <hr />
      <h1>Props:</h1>
      <FormaDeBolo sabor="Laranja" cobertura="Chantilly"/>      
      <FormaDeBolo sabor="Cenoura" cobertura="Chocolate"/> 
      <hr />
      <h1>Props e children</h1>
      <Card
        title="Notícia 1"
        category="Esportes"
        content="Conteúdo da notícia 1"
        image="<a href='https://via.placeholder.com/100' class='_blanktarget'>https://via.placeholder.com/100</a>"
      />
      <Card
        title="Notícia 2"
        category="Finanças"
        content="Conteúdo da notícia 2"
      />
      <Card
        title="Notícia 3"
        category="Tecnologia"
        content="Conteúdo da notícia 3"
        image="<a href='https://via.placeholder.com/100' class='_blanktarget'>https://via.placeholder.com/100</a>"
      />
      <CardDinamico>
        <h2>Card Dinâmico</h2>
        <p>Esse é um exemplo de card utilizando children.</p>
      </CardDinamico>
    </>
  );
}
 
export default App;