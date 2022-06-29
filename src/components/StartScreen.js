import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Forca</h1>
      <p>Clique no Botao para JOGAR</p>
      <button onClick={startGame}>Iniciar o Jogo</button>
    </div>
  );
};

export default StartScreen;
