import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GRSSample = () => {
  return (
    <View>
      <View
        style={styles.square}
        onStartShouldSetResponder={(event) => true}
        onMoveShouldSetResponde={(event) => true}
        onResponderGrant={(event) => {
          console.log({ responderGrantEvent: event });
        }}
        onResponderReject={(event) => {
          console.log({ responderRejectEvent: event });
        }}
        onResponderMove={(event) => {
          console.log({ responderMoveEvent: event });
        }}
        onResponderRelease={(event) => {
          console.log({ responderReleaseEvent: event });
        }}
        onResponderTerminationRequest={(event) => {
          console.log({ responderReleaseEvent: event });
        }}
        onResponderTerminate={(event) => {
          console.log({ responderTerminateEvent: event });
        }}
      />
    </View>
  );
};

export default GRSSample;

const styles = StyleSheet.create({
  square: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});
