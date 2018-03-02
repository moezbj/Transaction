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
import { CardSection } from "./common";

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text>
            style={styles.text}
            {library.description}
          </Text>
        </CardSection>
      );
      console.warn("heet");
    }
  }
  render() {
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.text}>{title}</Text>
            {this.renderDescription()}
          </CardSection>
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
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderColor: "#ddd"
  },
  text: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 15
  }
});
