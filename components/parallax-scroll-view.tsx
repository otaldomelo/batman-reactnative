import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet } from 'react-native';

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: {
    dark: string;
    light: string;
  };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const backgroundColor = useThemeColor({}, 'background');
  const colorScheme = useColorScheme() ?? 'dark';

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollOffset.value,
      [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
      [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      scrollOffset.value,
      [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
      [1.8, 1, 1],
      Extrapolation.CLAMP,
    );

    return {
      transform: [
        {
          translateY,
        },
        {
          scale,
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
      contentContainerStyle={styles.scrollContent}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View
        style={[
          styles.header,
          {
            backgroundColor:
              headerBackgroundColor[colorScheme],
          },
          headerAnimatedStyle,
        ]}
      >
        {headerImage}
      </Animated.View>

      <ThemedView style={styles.content}>
        {children}
      </ThemedView>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 40,
  },

  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    gap: 20,
    backgroundColor: '#050505',
  },
});