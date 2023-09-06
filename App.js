import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import PanGesture from './components/examples-with-rngh-and-rnr/PanGesture';
import TapGesture from './components/examples-with-rngh-and-rnr/TapGesture';
import LongPressGesture from './components/examples-with-rngh-and-rnr/LongPressGesture';
import RotationGesture from './components/examples-with-rngh-and-rnr/RotationGesture';
import ForceTouchGesture from './components/examples-with-rngh-and-rnr/ForceTouchGesture';
import FlingGesture from './components/examples-with-rngh-and-rnr/FlingGesture';
import ManualGesture from './components/examples-with-rngh-and-rnr/ManualGesture';
import NativeGesture from './components/examples-with-rngh-and-rnr/NativeGesture';
import PinchGestureExample from './components/examples-with-rngh-and-rnr/PinchGesture';
import WithPauseHelper from './components/examples-with-rngh-rnredash-reanimated/withPauseHelper';
import ButtonTranslate from './components/examples-with-rngh-rnredash-reanimated/ButtonTranslate';
import GRSSample from './components/gesture-responder-system/GRSSample';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Uncomment the GestureHandlerRootView When you are not testing GRSSample */}
      {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
      <View style={styles.container}>
        <StatusBar style='auto' />
        {/* <PanGesture /> */}
        {/* <TapGesture /> */}
        {/* <LongPressGesture /> */}
        {/* <RotationGesture /> */}
        {/* <PinchGestureExample /> */}
        {/* <FlingGesture /> */}
        {/* <ForceTouchGesture /> */}
        {/* <ManualGesture /> */}
        {/* <NativeGesture /> */}
        {/* <WithPauseHelper /> */}
        {/* <ButtonTranslate /> */}

        <GRSSample />
      </View>
      {/* </GestureHandlerRootView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? '10%' : '3%',
  },
});
