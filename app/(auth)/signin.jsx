import { useNavigation } from "expo-router";
import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "@/components/Themed";
import Buttoncls from "../../elements/Buttoncls";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Base_Url } from "../../utils/constant";
import { Formik } from "formik";
import * as Yup from "yup"; // For validation schema
import axios from "axios";
import { addUser } from "../../utils/userSlice";

export default function signin() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  // Define validation schema
  const reviewSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required"), 
    lastName: Yup.string()
      .required("Last name is required"), 
    emailID: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  

  const handlesignin = async (values) => {
    console.log("values", values);
    try {
      const result = await axios.post( Base_Url + "/signup",
        {  
          firstName:values.firstName,
          lastName:values.lastName,
          emailID: values.emailID,
          password: values.password,
        },
        { withCredentials: true }
      );
      console.log("result", result);
      dispatch(addUser(result?.data?.data));
      navigation.replace("(tabs)");
    } catch (error) {
      // console.log("error", error);
      // console.log("Error details:", error.toJSON()); 
      setError(error?.response?.data );
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{firstName:"", lastName:"", emailID:"", password:"" }}
        validationSchema={reviewSchema}
        onSubmit={(values) => handlesignin(values)}
      >
        {(props) => (
          <View style={styles.formcontainer}>
            <View style={styles.inputContainer}>
              <Text
                style={styles.label}
                lightColor="#2E5077"
                darkColor="#79D7BE"
              >
                Firstname
              </Text>
              <TextInput
                placeholder="firstName"
                style={styles.input}
                onChangeText={props.handleChange("firstName")}
                value={props.values.firstName}
                onBlur={props.handleBlur("firstName")}
              />
            </View>
            <Text style={styles.errorText}>
              {props.touched.firstName&& props.errors.firstName
                ? props.errors.firstName
                : ""}
            </Text>
            <View style={styles.inputContainer}>
              <Text
                style={styles.label}
                lightColor="#2E5077"
                darkColor="#79D7BE"
              >
                Lastname
              </Text>
              <TextInput
                placeholder="lastName"
                style={styles.input}
                onChangeText={props.handleChange("lastName")}
                value={props.values.lastName}
                onBlur={props.handleBlur("lastName")}
              />
            </View>
            <Text style={styles.errorText}>
              {props.touched.lastName && props.errors.lastName
                ? props.errors.lastName
                : ""}
            </Text>
            <View style={styles.inputContainer}>
              <Text
                style={styles.label}
                lightColor="#2E5077"
                darkColor="#79D7BE"
              >
                User ID
              </Text>
              <TextInput
                placeholder="emailID"
                style={styles.input}
                onChangeText={props.handleChange("emailID")}
                value={props.values.emailID}
                onBlur={props.handleBlur("emailID")}
              />
            </View>
            <Text style={styles.errorText}>
              {props.touched.emailID && props.errors.emailID
                ? props.errors.emailID
                : ""}
            </Text>

            <View style={styles.inputContainer}>
              <Text
                style={styles.label}
                lightColor="#2E5077"
                darkColor="#79D7BE"
              >
                Password
              </Text>
              <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                onBlur={props.handleBlur("password")}
              />
            </View>
            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password
                ? props.errors.password
                : ""}
            </Text>

            <Buttoncls
              title={"Login"}
              onPress={props.handleSubmit}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </Formik>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    padding: 20,
  },
  formcontainer:{
    width: "100%",
    justifyContent: "center",
    
  },
  errorText:{
    color:"red",
    fontSize: 14,
    fontWeight: 500,
    margin: 10,
    textAlign: "center",
  },
  label: {
    fontSize: 22,
    fontWeight: 400,
  },
  inputContainer: {
    width: "100%",
    gap: 5,
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
});
