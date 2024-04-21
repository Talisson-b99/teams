import { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "@/components/header";
import HighLight from "@/components/highlight";
import GroupCard from "@/components/group-card";
import ListEmpty from "@/components/list-empty";

import { Container } from "./styles";
import Button from "@/components/button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handlewGroup = () => {
    navigation.navigate("new");
  };

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
      />
      <Button title="Criar nova turma" onPress={handlewGroup} />
    </Container>
  );
}
