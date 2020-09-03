import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  /* The map() method creates a new array populated with the results of
   calling a provided function on every element in the calling array. */
  const amounts = transactions.map((transaction) => transaction.amount);
  
  /* The reduce() method executes a reducer function (that you provide) 
  on each element of the array, resulting in single output value. */
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Balance</Text>
      <Text style={{ fontWeight: "bold" }}>{total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    paddingTop: 15,
  },
});
export default Balance;
