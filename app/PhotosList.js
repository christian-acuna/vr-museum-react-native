import React, { Component } from 'react';

import {
  Image,
  ListView,
  Tile,
  Title,
  Subtitle,
  TouchableOpacity,
  Screen,
  Divider,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

import { connect } from 'react-redux';
import { navigatePush } from './redux';


class PhotosList extends Component {
  static propTypes = {
    onButtonPress: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  getImages() {
    return require('../assets/data/unsplash.json');
  }

  renderRow(photo) {
      const { onButtonPress } = this.props;

      return (
        <TouchableOpacity onPress={() => onButtonPress(photo)}>
          <Image
            styleName="large-banner"
            source={{ uri: photo.urls.full }}
          >
            <Tile>
              <Title styleName="md-gutter-bottom">{photo.user.username}</Title>
              <Subtitle styleName="sm-gutter-horizontal">{photo.user.bio}</Subtitle>
            </Tile>
          </Image>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    }

  render() {
    return (
      <Screen>
        <NavigationBar title="All Images" />

        <ListView
          data={this.getImages()}
          renderRow={photo => this.renderRow(photo)}
        />
      </Screen>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: (photo) => {
    dispatch(navigatePush({
      key: 'PhotosDetails',
      title: 'Details',
    }, { photo }));
  },
});

export default connect(
	undefined,
	mapDispatchToProps
)(PhotosList);
