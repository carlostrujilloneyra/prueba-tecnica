import { ContainerButtons, Logo, NavigationBar } from "./components";
import "../../../styles/Header.css";

export const Header = () => {
  return (
    <>
      <header className="main-header container">
        <Logo />
        <NavigationBar />
        <ContainerButtons />
      </header>
    </>
  );
};
