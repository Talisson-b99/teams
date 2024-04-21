import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import Icons from "@expo/vector-icons/FontAwesome6";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Icons).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))``;
