import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface GroupCard extends TouchableOpacityProps {
  title: string;
}

const GroupCard = ({ title, ...rest }: GroupCard) => {
  return (
    <Container {...rest}>
      <Icon name="group" />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
