import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const PinchGestureExample = () => {
  const scalePoint = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchHandler = Gesture.Pinch()
    .onUpdate((e) => {
      scalePoint.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scalePoint.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scalePoint.value }],
  }));

  return (
    <View style={{ borderWidth: 2 }}>
      <GestureDetector gesture={pinchHandler}>
        <Animated.Image
          source={{
            uri: 'https://images.unsplash.com/photo-1670184900611-434255d918ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80',
          }}
          style={[styles.square, animatedStyle]}
        />
      </GestureDetector>
    </View>
  );
};

export default PinchGestureExample;

const styles = StyleSheet.create({
  square: {
    width: 400,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 50,
    objectFit: 'cover',
  },
});
