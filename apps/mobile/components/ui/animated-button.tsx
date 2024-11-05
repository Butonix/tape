import { Colors } from "@/helpers/colors";
import { haptic } from "@/helpers/haptics";
import { LinearGradient } from "expo-linear-gradient";
import type React from "react";
import { StyleSheet, TouchableOpacity, type ViewStyle } from "react-native";

interface AnimatedButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onPress,
  children,
  style = {}
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onPress();
        haptic();
      }}
    >
      <LinearGradient
        colors={["#FFFFFF", "#E3E3E3"]}
        style={[styles.button, style]}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: Colors.border
  }
});
