import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Collapsible from '@/components/Collapsible';
import ExternalLink from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  collapsibleContent: {
    padding: 10,
  },
});

const ExploreScreen = () => {
  return (
    <ScrollView>
      <ParallaxScrollView>
        <ThemedView>
          <ThemedText>Explore Content</ThemedText>
          <Collapsible>
            <Text>Collapsible Content</Text>
          </Collapsible>
          <ExternalLink url="https://example.com">
            <Text>Visit Example.com</Text>
          </ExternalLink>
        </ThemedView>
      </ParallaxScrollView>
    </ScrollView>
  );
};

export default ExploreScreen;
