/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, ImageGallery, Card, Image, Subtitle, Caption, NavigationBar, Title } from '@shoutem/ui';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

import data from './data/unsplash';


export default class ImageGallery extends Component {
  render() {
    return (
    <View styleName="vertical collapsible">
       <View style={{ height: 400 }}>
         <ImageGallery
           data={[
              { description: 'description', title: 'title', source: { uri: data[0]["urls"]["full"] }},
              { description: 'description', title: 'title', source: { uri: data[1]["urls"]["full"] }},
              { description: 'description', title: 'title', source: { uri: data[2]["urls"]["full"] }},
              { description: 'description', title: 'title', source: { uri: data[3]["urls"]["full"] }},
            ]}
           pageMargin={10}
         />
       </View>
   </View>
    );
  }
}
