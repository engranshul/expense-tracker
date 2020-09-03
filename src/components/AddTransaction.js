import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { GlobalContext } from "../context/GlobalState";
import { Formik } from "formik";
import * as yup from "yup";


function AddTransaction() {
  
   /* uses Context and destructure addTransaction method from it */
  const { addTransaction } = useContext(GlobalContext);

  /* creating a new transaction by using user inputs..we create new 
  transaction coz each transaction object should have id in it */
  const createTransaction = (values) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: values.text,
      amount: +values.amount,
    };
    /* calling addTransaction */
    addTransaction(newTransaction);
  };

  return (
    <View style={styles.txncontainer}>
      <Text>Add Transaction</Text>

      <Formik
        initialValues={{ text: "", amount: "" }}
        onSubmit={(values, actions) => {
          console.log("form has been submitted...", values);
          /* this helps in clearing form once submitted */
          actions.resetForm();
          createTransaction(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter text..."
              /* sets value of text field */
              onChangeText={props.handleChange("text")}
              value={props.values.text}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter amount..."
              /* sets value of amount field */
              onChangeText={props.handleChange("amount")}
              value={props.values.amount}
              keyboardType="numeric"
            />

            <Button
              color="maroon"
              title="Submit"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  txncontainer: {
    marginHorizontal: 50,
    padding: 10,
    margin: 25,
    backgroundColor: "yellow",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

export default AddTransaction;
