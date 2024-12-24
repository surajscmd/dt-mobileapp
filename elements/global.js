
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
    },
    sample:{
      fontFamily: 'Roboto-SemiBold',
    },
    paragraph:{
        marginVertical: 8,
        lineHeight: 20,         
    },
    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      padding: 20,
      fontSize: 13,
      borderRadius: 6,
    },
    errorText: {
      color: "red",
      fontWeight: "500",
      fontSize: 12,
      marginTop: 6,
      marginBottom:10,
      textAlign:"center"
    },
  })