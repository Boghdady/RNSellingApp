import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppFormField, ButtonFormSubmit, AppForm } from "../components/forms";
import Screen from "../components/Screen";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required().trim().email().label("Email"),
  password: Yup.string().required().min(4),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values.email, values.password)}
        validationSchema={LoginSchema}
      >
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppFormField
          name="email"
          iconName="email"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          iconName="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
        />
        <ButtonFormSubmit title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
