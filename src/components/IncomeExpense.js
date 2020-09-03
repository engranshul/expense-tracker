import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  /* here transactions is an array..we get all amount in an array 
  using below line */
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <View style={styles.container}>
      <View>
        <Text style = {{ fontWeight : "bold"}}>Income</Text>
        <Text style={{ fontWeight: "bold" }}>{income}</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>Expense</Text>
        <Text style={{ fontWeight: "bold" }}>{expense}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
    paddingTop: 30
  },
});
export default IncomeExpense;
