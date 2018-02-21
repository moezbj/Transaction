import React, { Component } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    if (library.id === selectedLibraryId) {
      return <Text>{library.description}</Text>;
    }
  }
  render() {
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <View style={styles.containerStyle}>
            <Text style={styles.text}>{title}</Text>
            {this.renderDescription()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};
export default connect(null, actions)(ListItem);
const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  },
  text: {
    fontSize: 18,
    paddingLeft: 15
  }
});
