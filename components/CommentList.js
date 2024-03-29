import React from "react";
import { StyleSheet, ScrollView, Text, View} from "react-native";
import PropTypes from "prop-types";

export default class CommentList extends React.Component{

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  renderItems = () => {
    const { items } = this.props;

    return items.map((item, index) => (
        <View key={index} style={styles.comment}>
          <Text>{item}</Text>
        </View>
    ))
  };

  render() {
    return <ScrollView>{this.renderItems()}</ScrollView>
  }
}

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  }
});
