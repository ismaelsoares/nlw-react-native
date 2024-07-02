import { View, Image, StatusBar, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { colors } from "@/styles/colors";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");

  const handleAccessCredential = () => {
    if (!code.trim()) {
      Alert.alert("Ingresso", "Informe o código do ingresso!");
    }
    console.log(code);
  };
  return (
    <View className="items-center justify-center flex-1 bg-green-500">
      <StatusBar barStyle="light-content" />

      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-4/5 gap-3 mt-12">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={setCode}
          />
        </Input>
        <Button title="Acessar credencial" onPress={handleAccessCredential} />

        <Link
          href="/register"
          className="mt-8 text-base font-bold text-center text-gray-100"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
