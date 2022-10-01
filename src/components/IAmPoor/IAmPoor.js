import React from "react";
import { Image, View, Text } from "react-native";
import styles from "./IAmPoor.style";

const IAmPoor = () => {
  return (
    <View>
      <Text style={styles.text}>I Am POOR</Text>
      <Image
        source={require("../../assets/coal-icon-black-coal.png")}
        style={styles.image}
      />
    </View>
  );
};

export default IAmPoor;
