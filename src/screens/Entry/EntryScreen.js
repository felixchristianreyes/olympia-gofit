import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Button from "../../components/customs/Button";
import TextItem from "../../components/customs/TextItem";
import GoogleIcon from "../../../assets/googleIcon.svg";
import AppleIcon from "../../../assets/appleIcon.svg";
import FacebookIcon from "../../../assets/facebookIcon.svg";
import Divider from "../../components/customs/Divider";

const EntryScreen = ({ navigation }) => {
  const SignInButton = ({ title, onPress, color, icon }) => {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            },
          ]}
          onPress={onPress}
        >
          {icon}
          <TextItem style={styles.buttonText} type="h6" font="semibold">
            {title}
          </TextItem>
        </TouchableOpacity>
      </View>
    );
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic
  };

  const handleAppleSignIn = () => {
    // Handle Apple sign-in logic
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100%",
        }}
      >
        <TextItem type="h1" font="bold">
          FitSpace
        </TextItem>

        <View
          style={{
            gap: 40,
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "stretch",
            paddingVertical: 70,
          }}
        >
          <View style={{ gap: 16 }}>
            <SignInButton
              icon={<FacebookIcon />}
              title="Continue with Facebook"
            />
            <SignInButton icon={<GoogleIcon />} title="Continue with Google" />
            <SignInButton icon={<AppleIcon />} title="Continue with Apple" />
          </View>

          <Divider label="or" color="#E0E0E0" />

          <Button
            style={{ width: "100%" }}
            label="Login with Password"
            onPress={() => navigation.navigate("Signin")}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <TextItem type="body_m" font="semibold" style={{ color: "#9E9E9E" }}>
            {"Don't have an account? "}
          </TextItem>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <TextItem
              type="body_m"
              font="semibold"
              style={{ color: "#6842FF" }}
            >
              Sign up
            </TextItem>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 24,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  buttonContainer: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    width: 350,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    fontWeight: 600,
  },
});

export default EntryScreen;
