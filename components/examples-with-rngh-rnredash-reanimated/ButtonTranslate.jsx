import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { bin, useTiming } from 'react-native-redash';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

const ButtonTranslate = () => {
  const [open, setOpen] = useState(false);
  const transition = useTiming(open, { duration: 4000 });

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: transition.value,
  }));

  const handleOpen = () => {
    console.log({ bin: bin(open), transition });
    setOpen((prev) => !prev);
  };

  return (
    <View>
      <Animated.View style={[styles.square, animatedStyle]} />
      <Button title='Toggle' onPress={handleOpen} />
    </View>
  );
};

export default ButtonTranslate;

const styles = StyleSheet.create({
  square: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});
