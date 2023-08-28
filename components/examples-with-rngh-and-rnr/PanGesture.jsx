import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const PanGestureExample = () => {
  const squareColor = useSharedValue(styles.square.backgroundColor);
  const circleColor = useSharedValue(styles.circle.backgroundColor);
  const rectangleColor = useSharedValue(styles.rectangle.backgroundColor);

  const squareLastOffset = useSharedValue({ horizontal: 0, vertical: 0 });
  const circleLastOffset = useSharedValue({ horizontal: 0, vertical: 0 });
  const rectangleLastOffset = useSharedValue({ horizontal: 0, vertical: 0 });

  const squarePosition = useSharedValue({ horizontal: 0, vertical: 0 });
  const circlePosition = useSharedValue({ horizontal: 0, vertical: 0 });
  const rectanglePosition = useSharedValue({ horizontal: 0, vertical: 0 });

  const squareAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: squarePosition.value.horizontal },
      { translateY: squarePosition.value.vertical },
    ],
    backgroundColor: squareColor.value,
  }));

  const circleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: circlePosition.value.horizontal },
      { translateY: circlePosition.value.vertical },
    ],
    backgroundColor: circleColor.value,
  }));

  const rectangleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: rectanglePosition.value.horizontal },
      { translateY: rectanglePosition.value.vertical },
    ],
    backgroundColor: rectangleColor.value,
  }));

  const squareGesture = Gesture.Pan()
    .onStart((e) => {
      squareColor.value = '#000080';
    })
    .onUpdate((e) => {
      squarePosition.value = {
        horizontal: squareLastOffset.value.horizontal + e.translationX,
        vertical: squareLastOffset.value.vertical + e.translationY,
      };
    })
    .onEnd((e) => {
      squareLastOffset.value = {
        horizontal: squarePosition.value.horizontal,
        vertical: squarePosition.value.vertical,
      };
    })
    .onFinalize((e) => {
      squareColor.value = styles.square.backgroundColor;
    });

  const circleGesture = Gesture.Pan()
    .onStart((e) => {
      circleColor.value = '#228C22';
    })
    .onUpdate((e) => {
      circlePosition.value = {
        horizontal: circleLastOffset.value.horizontal + e.translationX,
        vertical: circleLastOffset.value.vertical + e.translationY,
      };
    })
    .onEnd((e) => {
      circleLastOffset.value = {
        horizontal: circlePosition.value.horizontal,
        vertical: circlePosition.value.vertical,
      };
    })
    .onFinalize((e) => {
      circleColor.value = styles.circle.backgroundColor;
    });

  const rectangleGesture = Gesture.Pan()
    .onStart((e) => {
      rectangleColor.value = '#C0362C';
    })
    .onUpdate((e) => {
      rectanglePosition.value = {
        horizontal: rectangleLastOffset.value.horizontal + e.t,
        vertical: rectangleLastOffset.value.vertical + e.translationY,
      };
    })
    .onEnd((e) => {
      rectangleLastOffset.value = {
        horizontal: rectanglePosition.value.horizontal,
        vertical: rectanglePosition.value.vertical,
      };
    })
    .onFinalize((e) => {
      rectangleColor.value = styles.rectangle.backgroundColor;
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={squareGesture}>
        <Animated.View style={[styles.square, squareAnimatedStyle]} />
      </GestureDetector>
      <GestureDetector gesture={circleGesture}>
        <Animated.View style={[styles.circle, circleAnimatedStyle]} />
      </GestureDetector>
      <GestureDetector gesture={rectangleGesture}>
        <Animated.View style={[styles.rectangle, rectangleAnimatedStyle]} />
      </GestureDetector>
    </View>
  );
};

export default PanGestureExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
