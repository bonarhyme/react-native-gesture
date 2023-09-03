import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const TapGestures = () => {
  const singleTapCount = useSharedValue(0);
  const doubleTapCount = useSharedValue(0);
  const tripleTapCount = useSharedValue(0);

  const singleTapAnimatedStyles = useAnimatedStyle(() => ({
    marginLeft: singleTapCount.value * 30,
  }));

  const doubleTapAnimatedStyles = useAnimatedStyle(() => ({
    marginLeft: doubleTapCount.value * 30,
  }));

  const tripleTapAnimatedStyles = useAnimatedStyle(() => ({
    marginLeft: tripleTapCount.value * 30,
  }));

  const singleTap = Gesture.Tap()
    // .maxDuration(250)
    .numberOfTaps(1)
    .onStart(() => {
      singleTapCount.value = singleTapCount.value + 1;
    });

  const doubleTap = Gesture.Tap()
    // .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      doubleTapCount.value = doubleTapCount.value + 1;
    });

  const tripleTap = Gesture.Tap()
    // .maxDuration(250)
    .numberOfTaps(3)
    .onStart(() => {
      tripleTapCount.value = tripleTapCount.value + 1;
    });

  const clearState = () => {
    singleTapCount.value = 0;
    doubleTapCount.value = 0;
    tripleTapCount.value = 0;
  };

  return (
    <View style={styles.container}>
      <GestureDetector gesture={singleTap}>
        <View style={[styles.itemWrapper]}>
          <Text>Single Tap to move </Text>
          <Animated.View style={[styles.square, singleTapAnimatedStyles]} />
        </View>
      </GestureDetector>
      <GestureDetector gesture={doubleTap}>
        <View style={styles.itemWrapper}>
          <Text>Double Tap to move</Text>
          <Animated.View style={[styles.circle, doubleTapAnimatedStyles]} />
        </View>
      </GestureDetector>
      <GestureDetector gesture={tripleTap}>
        <View style={styles.itemWrapper}>
          <Text>Triple Tap to move</Text>
          <Animated.View style={[styles.rectangle, tripleTapAnimatedStyles]} />
        </View>
      </GestureDetector>
      <Button title='Clear state' onPress={clearState} />
    </View>
  );
};

export default TapGestures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    borderWidth: 1,
    margin: 20,
  },
  square: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    marginTop: 10,
  },
  rectangle: {
    height: 50,
    width: 100,
    backgroundColor: 'orange',
    marginTop: 10,
  },
});
