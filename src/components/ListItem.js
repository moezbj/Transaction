import React, { Component } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends Component {
  renderDescription() {
    console.log("heet");
    const { library, selectedLibraryId } = this.props;
    if (library.id === selectedLibraryId) {
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
const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};
export default connect(mapStateToProps, actions)(ListItem);
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    borderColor: "#ddd"
  },
  text: {
    fontSize: 18,
    paddingLeft: 15
  }
});
