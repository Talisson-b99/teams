import { useState } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import Input from "@/components/input";
import Header from "@/components/header";
import Filter from "@/components/filter";
import HighLight from "@/components/highlight";
import ButtonIcon from "@/components/button-icon";
import PlayerCard from "@/components/player-card";
import ListEmpty from "@/components/list-empty";
import Button from "@/components/button";

interface RouteParams {
  group: string;
}

const Players = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([
    "Talisson Barbosa",
    "Joaozinho silva",
  ]);

  const route = useRoute();

  const { group } = route.params as RouteParams;

  const handleChangeTeamSelected = (time: string) => {
    setTeam(time);
  };

  return (
    <Container>
      <Header showBackBUtton />

      <HighLight title={group} subtitle="adicione a galera e separe os times" />
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
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
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
