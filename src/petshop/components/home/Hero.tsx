import { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import "../../styles/HeroHome.css";
import { motion } from "framer-motion";

const item = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export const Hero = () => {
  const { likes, setLikes } = useContext(StateContext);

  const likeProduct = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={item}
        transition={{ duration: 1.6 }}
        className="main-hero-home container"
      >
        <h1>HomePage</h1>
        <p className="paragraph-hero-home">Esta es la página de inicio</p>
        <div className="container-button">
          <button onClick={likeProduct}>Agregar favorito</button>
        </div>
      </motion.div>
    </>
  );
};
