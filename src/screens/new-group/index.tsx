import { Container, Content, Icon } from "./styles";

import Header from "@/components/header";
import HighLight from "@/components/highlight";
import Button from "@/components/button";
import Input from "@/components/input";

const NewGroup = () => {
  return (
    <Container>
      <Header showBackBUtton />
      <Content>
        <Icon name="people-group" />
        <HighLight
          title="Nova turma"
          subtitle="crie uma nova turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
};

export default NewGroup;
