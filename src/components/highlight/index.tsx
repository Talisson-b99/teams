import { Contaier, Subtitle, Title } from "./styles";

interface HighlightsProps {
  title: string;
  subtitle: string;
}

const HighLight = ({ title, subtitle }: HighlightsProps) => {
  return (
    <Contaier>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Contaier>
  );
};

export default HighLight;
