import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Container, Content, Icon } from "./styles";

import Header from "@/components/header";
import HighLight from "@/components/highlight";
import Button from "@/components/button";
import Input from "@/components/input";

const schema = z.object({
  name: z.string().min(1, { message: "O campo é obrigatorio" }),
});

type FormData = z.infer<typeof schema>;

const NewGroup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const navigation = useNavigation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    navigation.navigate("players", {
      group: data.name,
    });
  };

  return (
    <Container>
      <Header showBackBUtton />
      <Content>
        <Icon name="people-group" />
        <HighLight
          title="Nova turma"
          subtitle="crie uma nova turma para adicionar pessoas"
        />
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Nome da turma"
              value={value}
            />
          )}
        />
        {errors.name && (
          <Text style={{ color: "red" }}>{errors.name.message}</Text>
        )}
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleSubmit(onSubmit)}
        />
      </Content>
    </Container>
  );
};

export default NewGroup;
