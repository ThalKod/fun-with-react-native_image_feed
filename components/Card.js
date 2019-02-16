import React from "react";
import { ActivityIndicator, Image, View, StyleSheet} from "react-native";
import PropTypes from "prop-types";


import AuthorRow from './AuthorRow';

export default class  Card extends React.Component{

  state = {
    loading: true,
  };

  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func,
  };

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {},
  };

  handleLoad = () => {
    this.setState({ loading: false });
  };

  shouldComponentUpdate(nextProps) {
    return this.props.linkText !== nextProps.linkText
  }


  render(){
    const { fullname, image, linkText, onPressLinkText } = this.props;
    return (
        <View>
          <AuthorRow
              linkText={linkText}
              fullName={fullname}
              onPressLinkText={onPressLinkText}
          />
          <View style={styles.image}>
            { this.state.loading && (
                <ActivityIndicator size={"large"} style={StyleSheet.absoluteFill}/>
            )}
            <Image style={StyleSheet.absoluteFill} source={image} onLoad={this.handleLoad} />
          </View>
        </View>
    )
  }
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  }
});
