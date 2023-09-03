import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';

const FlingGesture = () => {
  const position = useSharedValue(0);

  const flingGesture = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart((e) => {
      position.value = withTiming(position.value + e.x, { duration: 100 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  return (
    <View style={{ borderWidth: 2 }}>
      <GestureDetector gesture={flingGesture}>
        <Animated.Image
          source={{ uri: 'https://image.pngaaa.com/46/2182046-middle.png' }}
          style={[styles.box, animatedStyle]}
          width={100}
          height={50}
        />
      </GestureDetector>
    </View>
  );
};

export default FlingGesture;

const styles = StyleSheet.create({
  square: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
});
