import { TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;

  border-radius: 6px;
`;

export const Name = styled.Text`
  flex: 1;
  text-transform: capitalize;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
`;
