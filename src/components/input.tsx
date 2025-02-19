import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

const Input = ({ children }: { children: ReactNode }) => {
  return (
    <View className="flex-row items-center w-full gap-3 p-3 border border-green-400 rounded-lg h-14">
      {children}
    </View>
  );
};

const Field = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      className="flex-1 text-base text-white font-regular"
      placeholderTextColor={colors.gray[200]}
      {...rest}
    />
  );
};

Input.Field = Field;

export { Input };
