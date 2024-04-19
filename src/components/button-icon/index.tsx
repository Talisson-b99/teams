import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypesProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonIconProps extends TouchableOpacityProps {
  type?: ButtonIconTypesProps;
  nameIcon: keyof typeof MaterialIcons.glyphMap;
}

const ButtonIcon = ({
  type = "PRIMARY",
  nameIcon,
  ...rest
}: ButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon name={nameIcon} type={type} />
    </Container>
  );
};

export default ButtonIcon;
