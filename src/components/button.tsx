import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export const Button = ({ title, isLoading = false, ...rest }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      className="items-center justify-center w-full bg-orange-500 rounded-lg h-14"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-base font-bold text-green-500 uppercase">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
