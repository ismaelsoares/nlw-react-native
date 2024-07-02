import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { QRCode } from "@/components/qrcode";
type Props = {
  image?: string;
  onChangeAvatar?: () => void;
  onExpandQRCode?: () => void;
};

export const Credential = ({
  onChangeAvatar,
  onExpandQRCode,
  image,
}: Props) => {
  return (
    <View className="items-center self-stretch w-full">
      <Image
        source={require("@/assets/ticket/band.png")}
        className="z-10 w-24 h-52"
      />

      <View className="items-center self-stretch pb-6 mx-3 -mt-5 border rounded-lg bg-black/20 border-white/10">
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className="items-center self-stretch h-40 px-6 py-8 overflow-hidden border-b border-white/10"
        >
          <View className="flex-row items-center justify-between w-full">
            <Text className="text-sm font-bold text-zinc-50">Unite summer</Text>
            <Text className="text-sm font-bold text-zinc-50">#123</Text>
          </View>

          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>

        {image ? (
          <TouchableOpacity onPress={onChangeAvatar} activeOpacity={0.9}>
            <Image
              source={{ uri: image }}
              className="-mt-24 rounded-full w-36 h-36"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.9}
            className="items-center justify-center -mt-24 bg-gray-400 rounded-full w-36 h-36"
            onPress={onChangeAvatar}
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}
        <Text className="mt-4 text-2xl font-bold text-zinc-50">
          Ismael Soares Doria
        </Text>

        <Text className="mb-4 text-base font-regular text-zinc-300">
          ismaelsoaresdoria@gmail.com
        </Text>

        <QRCode value="teste" size={120} />

        <TouchableOpacity
          activeOpacity={0.7}
          className="mt-6"
          onPress={onExpandQRCode}
        >
          <Text className="text-sm font-bold text-orange-500">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
