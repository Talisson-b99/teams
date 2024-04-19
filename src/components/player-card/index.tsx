import ButtonIcon from "../button-icon";
import { Container, Icon, Name } from "./styles";

interface PlayerCardProps {
  name: string;
  onRemove: () => void;
}

const PlayerCard = ({ name, onRemove }: PlayerCardProps) => {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>

      <ButtonIcon
        nameIcon="close"
        type="SECONDARY"
        onPress={() => onRemove()}
      />
    </Container>
  );
};

export default PlayerCard;
