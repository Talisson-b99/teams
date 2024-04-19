import styled from "styled-components/native";

import Icons from "@expo/vector-icons/AntDesign";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: auto;
`;

export const Icon = styled(Icons).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
