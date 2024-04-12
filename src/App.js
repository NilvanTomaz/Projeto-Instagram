import logo from './logo.svg';
import './App.css';
import ConteudoLateralEsquerda from './ConteudoLateralEsquerda';
function App() {
  return (
    <> 
      <ConteudoLateralEsquerda />
      
      
      <div className='conteudoCentral'>
        {/* Stories
        Feed de posts */}
      </div>
      <div className='conteudoLateralDireita'>
        {/* Login
        Sugestões
        Links legais
         */}
      </div>
    </>
  );
}

export default App;
