import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import './list.scss';

import { Taro_UI } from '../../constants/taroui';

export default class List extends Component {

  config = {
    navigationBarTitleText: '组件列表'
  }

  state = {
    type: 'basic',
    components: []
  }

  componentWillMount() {
    this.setState({ components: Taro_UI }, () => {
      console.info(this.state.components);
    });
  }

  render() {
    var { components } = this.state;
    return (
      <View className='component-list'>
        {components.map((item, index) => { return <View>{index}.{item.name}</View> })}
      </View>
    );
  }
}
