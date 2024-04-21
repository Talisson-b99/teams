import { useNavigation } from "@react-navigation/native";
import { BackButton, Container, Icon, Logo } from "./styles";

import LogoImg from "@/assets/logo.png";

interface HeaderProps {
  showBackBUtton?: boolean;
}

const Header = ({ showBackBUtton = false }: HeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("groups");
  };

  return (
    <Container>
      {showBackBUtton && (
        <BackButton onPress={handleGoBack}>
          <Icon name="left" />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
};

export default Header;
