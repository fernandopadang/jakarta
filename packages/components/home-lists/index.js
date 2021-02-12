import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Book',
    imageUrl:
      'https://ecs7.tokopedia.net/img/attachment/2020/3/31/77305583/77305583_35291d6c-c0cf-413b-a60f-f2313254a154.png',
  },
  {
    id: '2',
    title: 'Tea',
    imageUrl:
      'https://ecs7.tokopedia.net/img/attachment/2020/3/31/77305583/77305583_77ce98b8-3b7e-4cfc-b46c-1717cb9891b7.png',
  },
  {
    id: '3',
    title: 'Lamp',
    imageUrl:
      'https://ecs7.tokopedia.net/img/attachment/2020/3/31/77305583/77305583_20fe3022-e4ae-484a-aad9-285b88eed3b1.png',
  },
  {
    id: '4',
    title: 'Clothes',
    imageUrl:
      'https://ecs7.tokopedia.net/img/attachment/2020/3/31/77305583/77305583_8338b1e4-3e69-4049-8522-5a7a58441251.png',
  },
  {
    id: '5',
    title: 'Games',
    imageUrl:
      'https://ecs7.tokopedia.net/img/attachment/2020/3/31/77305583/77305583_819828a0-dd49-4b64-89a3-e64993dc37e6.png',
  },
  {
    id: '6',
    title: 'Phone',
    imageUrl:
      'https://ecs7.tokopedia.net/img/attachment/2020/3/31/77305583/77305583_1477d463-5b36-42f7-8b69-8df00fd3d375.png',
  },
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Image
      source={{
        uri: item.imageUrl,
      }}
      style={styles.imageItem}
    />
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#f5f5f5' : '#FFFFFF';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal={false}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    width: '29.444%',
    height: 100,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: Platform.select({ios: '600', android: 'bold'}),
    marginTop: 8,
  },
  imageItem: {
    width: 50,
    height: 50,
  },
});

export default App;
