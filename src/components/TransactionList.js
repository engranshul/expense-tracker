import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { GlobalContext } from "../context/GlobalState";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  console.log("transactions are", transactions);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.txnDetails}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 14 }}>{item.amount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.txncontainer}>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  txnDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    borderWidth: 1,
    padding: 8,
  },
});
export default TransactionList;
