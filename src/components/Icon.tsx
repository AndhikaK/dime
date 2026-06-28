import AntDesign, {
  AntDesignIconName,
} from "@react-native-vector-icons/ant-design";
import { ColorValue } from "react-native";
import { useUnistyles } from "react-native-unistyles";

type IconProps = {
  name: AntDesignIconName;
  size?: number;
  color?: ColorValue;
};
export const Icon = (props: IconProps) => {
  const { name, size = 24, color } = props;

  const { theme } = useUnistyles();

  return (
    <AntDesign
      name={name}
      size={size}
      color={color || theme.colors["text-primary"]}
    />
  );
};
