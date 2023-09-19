import { ContainerButtons, Logo, NavigationBar } from "./components";
import "../../../styles/Header.css";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <>
      <motion.header
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="main-header container"
      >
        <Logo />
        <NavigationBar />
        <ContainerButtons />
      </motion.header>
    </>
  );
};
