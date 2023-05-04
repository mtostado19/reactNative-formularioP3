import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { users } from '../resources/users';

interface HomeNavigation {
    navigation: NavigationScreenProp<any, any>
}

export default function Main({navigation}: HomeNavigation) {
  return (
    <View style={styles.container}>
      <Text style={styles.UserTextStyle}>Usuarios</Text>
      {
        users.map(({name, surname}) => (
          <ListItem
            title={name}
            leading={<Icon name="account" size={24} />}
            trailing={props => <Icon name="chevron-right" {...props} />}
            onPress={() => navigation.navigate("UserInfo", {name, surname})}
          />
        ))
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  UserTextStyle: {
    fontSize: 20,
    padding: 15,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
});
