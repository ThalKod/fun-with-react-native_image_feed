import React from "react";
import { StyleSheet, TextInput, View} from "react-native";
import PropTypes from "prop-types";

export default class CommentInput extends React.Component{

  state = {
    text: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    placeholder: "",
  };

  handleSubmit = () => {
    const { onSubmit, } = this.props;
    const { text } = this.state;

    if(!text) return;

    onSubmit(text);
    this.setState({ text: ""});
  };

  render(){
    const { text } = this.state;
    const { placeholder } = this.props;

    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={this.handleSubmit}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 20,
    height: 60
  },
  input: {
    flex: 1
  }
});
