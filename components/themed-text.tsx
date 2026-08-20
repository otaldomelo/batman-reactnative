import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    'text',
  );

  return (
    <Text
      style={[
        { color },

        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'defaultSemiBold' &&
          styles.defaultSemiBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,

        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: '#B8B8B8',
  },

  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 36,
    color: '#FFFFFF',
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },

  link: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: '800',
    color: '#F5C518',
  },
});