import React, { useState } from "react";
import {
  Flex,
  Heading,
  VStack,
  Text,
  Pressable,
  Input,
  Icon,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  interface Nav {
    navigate: (value: string) => void;
  }

  const { navigate } = useNavigation<Nav>();

  return (
    <VStack padding={10} space={20}>
      <VStack justifyContent="center" alignItems="center" space={1}>
        <Heading size="2xl">Sign Up</Heading>
        <Flex direction="row">
          <Text fontSize="lg">Already have an account? </Text>
          <Pressable>
            <Text fontSize="lg" bold>
              Login
            </Text>
          </Pressable>
        </Flex>
      </VStack>
      <VStack space={5}>
        <Input
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          fontSize="lg"
          placeholder="Username"
        />
        <Input
          type={showPassword ? "text" : "password"}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="lock" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          InputRightElement={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Icon
                as={
                  <MaterialIcons
                    name={showPassword ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          fontSize="lg"
          placeholder="Password"
        />
      </VStack>
      <Button
        buttonText="sign up"
        iconName="right"
        iconSize={24}
        onPress={() => {
          navigate("Homescreen");
        }}
      />
    </VStack>
  );
};

export default SignUp;
