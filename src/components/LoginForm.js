import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Button, Card, CardSection, Input, Spinner } from "./common";
import firebase from "firebase";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { emailChanged, passWordChanged, loginUser } from "../actions";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onChangePassword(text) {
    this.props.passWordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
            placeholder="user@gmail.com"
            label="Email"
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
            onChangeText={this.onChangePassword.bind(this)}
            placeholder="********"
            label="Password"
            secureTextEntry={true}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passWordChanged,
  loginUser
})(LoginForm);
