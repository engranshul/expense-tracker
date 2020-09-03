import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Balance from "../components/Balance";
import IncomeExpense from "../components/IncomeExpense";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";


function HomeScreen() {


  return (
    <View style={styles.container}>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1,
  },
});

export default HomeScreen;

/* 
concept of how we have passed two functions from SearchScreen to SearchBar and
how they are called in SearchBar..
*/
