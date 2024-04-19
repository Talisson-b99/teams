import { TouchableOpacityProps } from "react-native";
import { Container, FilterStypeProps, Title } from "./styles";

interface FilterProps extends TouchableOpacityProps, FilterStypeProps {
  title: string;
}

const Filter = ({ isActive = false, title, ...rest }: FilterProps) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Filter;
