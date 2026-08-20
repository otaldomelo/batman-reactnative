import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';

export function HelloWave() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(-15, { duration: 250 }),
        withTiming(15, { duration: 250 }),
        withTiming(0, { duration: 250 }),
      ),
      -1,
      false,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));

  return (
    <Animated.Text
      style={[
        {
          fontSize: 42,
          color: '#F5C518',
          textShadowColor: '#F5C518',
          textShadowRadius: 12,
        },
        animatedStyle,
      ]}
    >
      🦇
    </Animated.Text>
  );
}