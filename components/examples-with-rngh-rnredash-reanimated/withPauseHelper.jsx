import React, { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { Button, StyleSheet, View } from 'react-native';
import { withPause } from 'react-native-redash';

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const WithPauseHelper = () => {
  const rotation = useSharedValue(0);
  const paused = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value * 360}deg` }],
  }));

  const stopAnimation = () => {
    paused.value = true;
  };

  const startAnimation = () => {
    paused.value = false;
  };

  useEffect(() => {
    rotation.value = withPause(
      withRepeat(withTiming(1, { duration, easing }), -1),
      paused
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title='Cancel' onPress={stopAnimation} />
      <Button title='Start' onPress={startAnimation} />
    </View>
  );
};

export default WithPauseHelper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    gap: 70,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    borderRadius: 10,
  },
});
