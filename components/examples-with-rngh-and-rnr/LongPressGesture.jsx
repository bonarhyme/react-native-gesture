import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const LongPressGesture = () => {
  const isLongPressed = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    display: isLongPressed.value ? 'flex' : 'none',
  }));

  const longPressHandler = Gesture.LongPress()
    .minDuration(3000)
    .maxDistance(10)
    .onStart((e) => {})
    .onEnd((e) => {
      isLongPressed.value = true;
      // User has pressed for the minimum duration(3000 milliseconds or 3 seconds) we set
    });

  const clearStates = () => {
    isLongPressed.value = false;
  };

  return (
    <View style={styles.container}>
      <GestureDetector gesture={longPressHandler}>
        <View style={{ marginVertical: 50 }}>
          <Animated.Text style={[animatedStyle]}>
            Yay!!! You pressed and held for 3 seconds
          </Animated.Text>

          <Button title='Press and hold me' />
        </View>
      </GestureDetector>

      <Button title='Clear' onPress={clearStates} />
    </View>
  );
};

export default LongPressGesture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
