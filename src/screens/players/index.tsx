import { useState } from "react";
import { FlatList } from "react-native";

import {
  Container,
  Content,
  Form,
  HeaderList,
  NumbersOfPlayers,
} from "./styles";

import Input from "@/components/input";
import Header from "@/components/header";
import Filter from "@/components/filter";
import HighLight from "@/components/highlight";
import ButtonIcon from "@/components/button-icon";
import PlayerCard from "@/components/player-card";
import ListEmpty from "@/components/list-empty";
import Button from "@/components/button";

const Players = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([
    "Talisson Barbosa",
    "Joaozinho silva",
    "Ana",
    "Maisa",
    "Maeli",
    "Shirley",
    "Raila",
    "Raiane",
    "Karine",
    "Pedro",
    "Giovana",
    "Yasmim",
  ]);

  const handleChangeTeamSelected = (time: string) => {
    setTeam(time);
  };

  return (
    <Container>
      <Header showBackBUtton />

      <HighLight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da participante" autoCorrect={false} />
        <ButtonIcon nameIcon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={team === item}
              onPress={() => handleChangeTeamSelected(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
};

export default Players;
