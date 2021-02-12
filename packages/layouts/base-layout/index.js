import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import AlbumLists from '../../components/album-lists';
import HomeLists from '../../components/home-lists';

const BaseLayout = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <AlbumLists />
      <HomeLists />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFFFFF',
  },
});

export default BaseLayout;
