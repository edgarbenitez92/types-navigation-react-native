import { StyleSheet } from "react-native";

export const colors = {
  primary: '#5856D6',
}


export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  },
  titleScreen: {
    fontSize: 30,
    marginBottom: 10
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  bigButtonLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 20
  },
  avatarContainer: {
    alignItems: 'center'
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuButton: {
    marginVertical: 10
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});