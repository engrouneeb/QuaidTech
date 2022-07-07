/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { DropDown } from './components';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [showList, setShowList] = useState(false);
  const [selectedCurrency, setCurrency] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [selectedCurrencySign, setSelectedCurrencySign] = useState('AUD');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const setSelectedCurrency = (currency: string) => {
    setCurrency(currency);
    setShowList(false);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.leftBox}>
            <TextInput placeholder="enter value in USD" style={styles.input} />
            <Text style={{ alignSelf: 'flex-start' }}>US Dollar (USD)</Text>
          </View>
          <Text style={styles.equalitySign}>=</Text>
          <View style={styles.rightBox}>
            <Text style={styles.input}>
              {convertedValue.length > 0
                ? `${convertedValue}`
                : 'Converted Value'}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ alignSelf: 'flex-start' }}>
                {`${selectedCurrency} Dollar ${selectedCurrencySign}`}
              </Text>
              <Pressable
                onPress={() => {
                  setShowList(true);
                }}
                style={{ marginLeft: 20 }}
              >
                <DropDown show={showList} setValue={setSelectedCurrency} />
                <Text style={{ fontSize: 18, fontWeight: '600' }}>V</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{ height: 150, marginTop: 15, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>
            USD:The entered amount AUD:Converted amount in desired currency
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flexDirection: 'row', height: 120, padding: 5, marginTop: 40 },
  leftBox: {
    flex: 0.9,
    backgroundColor: '#B4D7FF',
    borderColor: '#B4D7FF',
    borderTopLeftRadius: 15,
    marginRight: 5,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  rightBox: {
    flex: 1,
    backgroundColor: '#B4D7FF',
    borderColor: 'r#B4D7FF',
    borderTopRightRadius: 15,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  equalitySign: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '500',
    marginRight: 5,
  },
  input: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    alignSelf: 'center',
  },
});

export default App;
