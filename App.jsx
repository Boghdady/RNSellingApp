import React from "react";
import {Button, SafeAreaView, Text,} from "react-native";

import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


const categories = [
    {label: "Furniture", value: 1},
    {label: "Clothes", value: 2},
    {label: "Technologies", value: 3},
    {label: "Books", value: 4},
    {label: "Devices", value: 5},
];

const Link = () => {
    const navigation = useNavigation();
    return (
        <Button
            title="Link"
            onPress={() => navigation.navigate("Tweet Details", {id: 1})}
        />
    );
};
const Tweets = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Tweets Screen</Text>
            <Link/>
        </SafeAreaView>
    );
};
const TweetDetails = ({route}) => {
    return (
        <SafeAreaView>
            <Text>Tweet Details Screen {route.params.id}</Text>
        </SafeAreaView>
    );
};

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "red",
                },
                headerTintColor: "white",
            }}
        >
            <Stack.Screen name="Tweets" component={Tweets}/>
            <Stack.Screen
                name="Tweet Details"
                component={TweetDetails}
                options={({route}) => ({
                    title: route.params.id,
                    headerStyle: {
                        backgroundColor: "red",
                    },
                    headerTintColor: "white",
                })}
            />
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
}

// const [email, setEmail] = useState("");
// const [category, setCategory] = useState();
// const [imageUri, setImageUri] = useState();
// const [imageUris, setImageUris] = useState([]);

// const addImage = (uri) => {
//   setImageUris([...imageUris, uri]);
// };

// const removeImage = (uri) => {
//   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
// };
// // useEffect(() => {}, []);
// const handleEmail = (text) => {
//   setEmail(text);
// };
{
    /* <Card
          title="the red jacket"
          price="100$"
          image={require("./app/assets/jacket.jpg")}
        /> */
}
{
    /* <ListingDetailsScreen /> */
}
{
    /* <MessagesScreen /> */
}
{
    /* <StatusBar style="auto" /> */
}
{
    /* <Icon name="email" size={50} backgroundColor="red" iconColor="white" /> */
}
{
    /* <ListItem
          title="title"
          subtitle="subtitle"
          IconComponent= {
            <Icon
              name="email"
              size={50}
              backgroundColor="red"
              iconColor="white"
            />
          }
        /> */
}
{
    /* <AccountScreen /> */
}
{
    /* <ListengsScreen /> */
}
{
    /* <Text>{email}</Text> */
}
{
    /* <TextInput
          secureTextEntry
          clearButtonMode="always"
          placeholder="enter your email"
          onChangeText={handleEmail}
          maxLength={3}
          keyboardType="email-address"
          style={{ borderBottomWidth: 1, borderBottomColor: "#ccc", height: 32 }}
        /> */
}
{
    /* <AppPicker
          modalItems={categories}
          iconName="apps"
          placeholder="Choose categories"
          selectedItem={category}
          onSelectedItem={(item) => setCategory(item.label)}
        /> */
}
{
    /* <AppTextInput placeholder="Username" iconName="email" /> */
}

{
    /* <AppSwitch /> */
}
{
    /* <ListingEditScreen /> */
}

{
    /* <ImageInutp
          imageUri={imageUri}
          onChangeImage={(uri) => setImageUri(uri)}
        /> */
}
{
    /* <ImageInputList
          imageUris={imageUris}
          addImage={addImage}
          removeImage={removeImage}
        /> */
}
