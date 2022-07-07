import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
interface Currency {
  id: string;
  name: string;
}
interface DropDownProps {
  show: boolean;
  setValue: () => {};
}

export const DropDown: React.FC<DropDownProps> = ({ show, setValue }) => {
  const [currencyList, setCurrencyList] = useState([
    {
      id: '1',
      name: 'Michael Scott',
    },
    {
      id: '2',
      name: 'Jim Halpert',
    },
    {
      id: '3',
      name: 'Pam Beesly',
    },
    {
      id: '4',
      name: 'Dwight Schrute',
    },
    {
      id: '5',
      name: 'Andy Bernard',
    },
    {
      id: '6',
      name: 'Ryan Howard',
    },
    {
      id: '7',
      name: 'Kelly Kapoor',
    },
    {
      id: '8',
      name: 'Toby Flenderson',
    },
    {
      id: '9',
      name: 'Stanley Hudson',
    },
    {
      id: '10',
      name: 'Phyllis Vance',
    },
  ]);
  const Item = ({ data }: { data: Currency }) => (
    <Pressable onPress={setValue(data.name)}>
      <View
        style={{
          backgroundColor: '#eeeeee',
          borderRadius: 10,
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        }}
      >
        <Text style={{ fontSize: 16 }}>{data.name}</Text>
      </View>
    </Pressable>
  );
  return show ? (
    <FlatList
      data={currencyList}
      renderItem={({ item }) => <Item data={item} />}
      keyExtractor={(item: Currency) => item.id}
      style={{ height: 200 }}
    />
  ) : null;
};
