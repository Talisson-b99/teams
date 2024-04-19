import { Container, Message } from "./styles";

interface ListEmptyProps {
  message: string;
}

const ListEmpty = ({ message }: ListEmptyProps) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default ListEmpty;
