import { Container, Content, Form } from "./styles";

import Input from "@/components/input";
import Header from "@/components/header";
import HighLight from "@/components/highlight";
import ButtonIcon from "@/components/button-icon";

const Players = () => {
  return (
    <Container>
      <Header showBackBUtton />
      <Content>
        <HighLight
          title="Nome da turma"
          subtitle="adicione a galera e separe os times"
        />
        <Form>
          <Input placeholder="Nome da participante" autoCorrect={false} />
          <ButtonIcon nameIcon="add" />
        </Form>
      </Content>
    </Container>
  );
};

export default Players;
