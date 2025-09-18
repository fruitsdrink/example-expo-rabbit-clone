import { TextInput, StyleSheet } from "react-native";

interface Props {
  placeholder: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  placeholder,
  value,
  secureTextEntry,
  onChangeText,
}) => {
  return (
    <TextInput
      autoCapitalize="none"
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.input}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#d4d4d4",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
});
