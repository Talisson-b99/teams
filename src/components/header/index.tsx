import { BackButton, Container, Icon, Logo } from "./styles";

import LogoImg from "@/assets/logo.png";

interface HeaderProps {
  showBackBUtton?: boolean;
}

const Header = ({ showBackBUtton = false }: HeaderProps) => {
  return (
    <Container>
      {showBackBUtton && (
        <BackButton>
          <Icon name="left" />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
};

export default Header;
