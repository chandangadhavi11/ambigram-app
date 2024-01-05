import * as React from "react";
import { Text } from "react-native";
import * as Font from 'expo-font';
import { Provider } from "react-redux";
import store from "./redux/store";
import MyForm from "./screens/HelperScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';



const App = () => {

  const [dataLoaded, setDataLoaded] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({
      'Averta': require('./assets/fonts/Averta-Regular.otf'),
    }).then(() => {
      setDataLoaded(true);
    });
  }, []);

  // console.log(Dimensions.get('screen').height);






  if (dataLoaded === false) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <Provider store={store}>
        <MyForm />
      </Provider>
    );
  }



};
export default App;
