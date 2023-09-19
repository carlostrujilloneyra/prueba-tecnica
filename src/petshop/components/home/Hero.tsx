import { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import "../../styles/HeroHome.css";

export const Hero = () => {
  const { likes, setLikes } = useContext(StateContext);

  const likeProduct = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <div className="main-hero-home container">
        <h1>HomePage</h1>
        <p>Esta es la página de inicio</p>
        <div className="container-button">
          <button onClick={likeProduct}>Agregar favorito</button>
        </div>
      </div>
    </>
  );
};
