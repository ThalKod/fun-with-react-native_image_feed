import React from "react";
import { StyleSheet, View, TouchableOpacity, Text} from "react-native";
import PropTypes from "prop-types";

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor'; import getInitials from '../utils/getInitials';


export default function AuthorRow({ fullName, linkText, onPressLinkTest}) {
  return (
      <View style={styles.container}>
          <Avatar
              initials={getInitials(fullName)}
              size={35}
              backgroundColor={getAvatarColor(fullName)}
          />
        <Text style={style.text} numberOfLines={1}>{fullName}</Text>
      </View>
  )
}

AuthorRow.propTypes({
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
});

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "flex-center",
    paddingHorizontal: 10
  },
  text: {
    flex: 1,
    paddingHorizontal: 6,
  }
});
