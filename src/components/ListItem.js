import React, { Component } from "react";
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { CardSection } from "./common/CardSection";

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    console.log("heet");
    const { library, expanded } = this.props;
    if (expanded) {
      return <Text>{library.description}</Text>;
    }
  }
  render() {
    console.log(this.props);
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <View style={styles.containerStyle}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{this.renderDescription()}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderColor: "#ddd"
  },
  text: {
    fontSize: 18,
    paddingLeft: 15
  }
});
