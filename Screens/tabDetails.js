
import React from 'react';
import { Button, View, Text } from 'react-native';

// This is for just example will clear this one

export default function TabADetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
        <Text>
          Welcome to home page!
        </Text>
        <Button 
        onPress={() => navigation.navigate('Details')}
        title="Go to Details"
        />
      </View>
    );
  }