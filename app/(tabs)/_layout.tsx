import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#050505',
          borderTopColor: '#FFD700',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Batcaverna',
          tabBarIcon: () => (
            <Text style={{ fontSize: 24 }}>🦇</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Gotham',
          tabBarIcon: () => (
            <Text style={{ fontSize: 24 }}>🦇</Text>
          ),
        }}
      />
    </Tabs>
  );
}