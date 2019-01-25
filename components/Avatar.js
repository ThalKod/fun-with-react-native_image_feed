import React from "react";
import { View, Text, ColorPropType, StyleSheet } from "react-native";
import PropTypes from 'prop-types';


export default function Avatar({ size, backgroundColor, initials }){

    const style = {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor
    };

    return (
        <View style={[styles.container, style]}>
          <Text style={styles.text}>{initials}</Text>
        </View>
    );
}

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
  text: {
      color: "white"
  }
});
