import style from './style';
import React, { PureComponent } from 'react';
import { Text, View, ScrollView, Image, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/Colors';

class Aboutscreen extends PureComponent {
  static navigationOptions = {
    drawerLabel: 'About OYA',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'}
        size={30}
        color={colors.blue2}

      />
    ),
  };

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={this.handleMenu} // navigation
        >
          <View style={style.drawernav}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
              size={40}
              style={style.menu}
              color={colors.blue2}

            />
          </View>
        </TouchableOpacity>
        <ScrollView style={style.textBox}>
          <Image
            source={
              __DEV__
                ? require('../../assets/images/logo.png')
                : require('../../assets/images/logo.png')
            }
            style={style.logo}
          />
          <Text style={style.title}> 什么是OYA？ </Text>
          <Text style={style.desc}>
            {' '}
            Oya是一个免费的点对点翻译服务，可与您建立联系
            会讲双语的人能够为您提供翻译和
            简单短语或帮助您促进学习的上下文
            会话。无论是与亲人更好地交流，
            同事或向房东提出要求。 OYA助剂将
            帮助您说什么以及怎么说
          </Text>

          <Text style={style.title}> 多少钱?</Text>
          <Text style={style.desc}>
            {' '}
            OYA是一项完全免费的服务。义工永远不要问你
            付款或其他个人或敏感信息。如果有的话
            请立即让我们知道并结束您的会议。
          </Text>

          <Text style={style.title}> 您支持什么语言？</Text>
          <Text style={style.desc}>
            {' '}
            目前，我们支持英语与西班牙语之间的翻译，以及
            英文与中文之间的交流，尽管我们希望将其扩展到
            随着OYA社区的发展，还会有其他语言。
          </Text>

          <Text style={style.title}> 您提供法律建议吗？</Text>
          <Text style={style.desc}>
            {' '}
            不，OYA的目的不是提供法律或法律意见
            除此以外。 OYA志愿者尚未通过认证或验证
            法律专业人员。
          </Text>

          <Text style={style.title}>
            您是否报告或分享法律上讨论过的任何信息
              执法还是其他机构？
          </Text>
          <Text style={style.emphesis}>

            我们的使命是使人们无所畏惧地团结在一起。
          </Text>
          <Text style={style.desc}>
            我们收集的唯一可识别信息是从志愿者到
              验证他们的意图是向那些人提供准确的信息
              寻求帮助。用户不需要提供任何个人信息
              使用OYA的信息。
          </Text>

          <Text style={style.desc}>
            不会收集，存储或保存诸如移民身份之类的信息
              报告给志愿者或用户。义工永远不要问你
              用于个人身份或移民身份信息。如果
              他们会的，请立即通知我们，结束您的会议。
          </Text>

          <Text style={style.desc}>
            话虽如此，如果您威胁或要求志愿者协助
              从事非法活动，他们将被迫结束您的会议，并且
              在评论的严重性之前，这些评论可能会报告给
              警察。
          </Text>
        </ScrollView>
      </View>
    );
  }

  handleMenu = () => {
    this.props.navigation.openDrawer();
  };

}

export default Aboutscreen;
