import React, { Component } from 'react';
import {
  ScrollView,
  Icon,
  Row,
  Subtitle,
  Text,
  Title,
  View,
  Image,
  Divider,
  Tile,
  Screen,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

export default class PhotosDetails extends Component {
  static propTypes = {
    photo: React.PropTypes.object,
  };

  render() {
    const { photo } = this.props;

    return (
      <Screen styleName="paper full-screen">
        <NavigationBar
          title={photo.user.name}
          styleName="clear"
          animationName="solidify"
        />

        <ScrollView>
          <Image
            styleName="large-portrait hero"
            animationName="hero"
            source={{ uri: photo.urls.full }}
            key={photo.id}
          >
            <Tile animationName="hero">
              <Title>{photo.user.first_name}</Title>
              <Subtitle>{photo.user.last}</Subtitle>
            </Tile>
          </Image>

          <Screen styleName="paper">
            <Text styleName="md-gutter multiline">{photo.user.bio}</Text>

            <Divider styleName="line" />

            <Row>
              <Icon name="laptop" />
              <View styleName="vertical">
                <Subtitle>Visit webpage</Subtitle>
                <Text numberOfLines={1}>{photo.user.portfolio_url}</Text>
              </View>
              <Icon styleName="disclosure" name="right-arrow" />
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="pin" />
              <View styleName="vertical">
                <Subtitle>Address</Subtitle>
                <Text numberOfLines={1}>{photo.likes}</Text>
              </View>
              <Icon styleName="disclosure" name="right-arrow" />
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="email" />
              <View styleName="vertical">
                <Subtitle>Email</Subtitle>
                <Text numberOfLines={1}>{photo.id}</Text>
              </View>
            </Row>

            <Divider styleName="line" />
          </Screen>
        </ScrollView>
      </Screen>
    );
  }
}
