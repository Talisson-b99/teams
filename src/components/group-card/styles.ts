import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import Icons from "@expo/vector-icons/FontAwesome";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  gap: 20px;

  padding: 32px 24px;
  margin-bottom: 12px;
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(Icons).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.GREEN_700,
}))``;
