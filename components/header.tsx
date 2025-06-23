import Container from "./container";
import HeaderMenu from "./header-menu";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <Container className="flex items-center justify-between">
        <Logo />
        <HeaderMenu />
        <div>Others</div>
      </Container>
    </header>
  );
};

export default Header;
