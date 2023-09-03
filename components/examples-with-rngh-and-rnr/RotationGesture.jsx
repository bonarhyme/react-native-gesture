import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const RotationGesture = () => {
  const rotationPoint = useSharedValue(0);
  const lastRotation = useSharedValue(0);

  const rotationHandler = Gesture.Rotation()
    .onBegin((e) => {
      console.log({ begin: e });
    })
    .onStart((e) => {
      console.log({ start: e });
    })
    .onUpdate((e) => {
      t.value = lastRotation.value + e.rotation;
    })
    .onEnd(() => {
      lastRotation.value = rotationPoint.value;
    });

  const aniate = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${(rotationPoint.value / Math.PI) * 180}deg` }],
  }));

  return (
    <View style={{ borderWidth: 2 }}>
      <GestureDetector gesture={rotationHandler}>
        <Animated.View style={[styles.square, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};

export default RotationGesture;

const styles = StyleSheet.create({
  square: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 50,
  },
});
