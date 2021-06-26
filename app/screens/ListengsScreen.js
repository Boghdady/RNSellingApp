import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Button, Platform } from "react-native";
import Card from "../components/card";
import Screen from "../components/Screen";
import AppText from "../shared/AppText";

import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import { useApi } from "../hooks/useApi";

export default function ListengsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  const [refresh, setRefresh] = useState(false);

  handleRefesh = async () => {
    setRefresh(true);
    await getListingsApi.request();
    setRefresh(false);
  };
  useEffect(() => {
    (async () => {
      await getListingsApi.request();
    })();
  }, []);

  return (
    <Screen style={styles.container}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={getListingsApi.request()} />
        </>
      )}
      <ActivityIndicator visable={getListingsApi.loading} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={getListingsApi.data}
        keyExtractor={(card) => card.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={item.price}
            image={item.images[0].url}
            onPress={() => navigation.navigate("ListeningDetails", { item })}
          />
        )}
        refreshing={refresh}
        onRefresh={handleRefesh}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});
