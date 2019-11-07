import style from './style';
import React, { PureComponent } from 'react';
import { Text, View, ScrollView, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


class Aboutscreen extends PureComponent {
  componentDidMount() {
    console.log('About did mount');
  }

  componentWillUnmount() {
    console.log('About Unmounted');
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-arrow-dropleft' : 'md-arrow-dropleft'}
            size={30}
            style={style.back}
            onPress={this.handleBackPress}
          />
          <View style={style.dotContainer}>
            <Image
              source={require('../../assets/images/dots.png')}
              style={style.dots}
            />
          </View>
        </View>
        <ScrollView style={style.textBox}>
          <Text style={style.title}> WHAT IS OYA? </Text>
          <Text style={style.desc}>
            {' '}
            Oya is a FREE peer to peer translation service that connects you
            with bilingual speakers able to provide you with translation and
            context either for simple phrases or to help you facilitate a
            conversation. Whether it’s to better communicate with a loved one,
            coworker or make a request of your landlord. OYA voluteeners will
            help you with what to say and how to say it.
          </Text>

          <Text style={style.title}> HOW MUCH IS IT?</Text>
          <Text style={style.desc}>
            {' '}
            OYA is a totally free service. Volunteers should never ask you for
            payment or other personal or sensitive information. If they do,
            please let us know right away and end your session.
          </Text>

          <Text style={style.title}> WHAT LANGUAGES DO YOU SUPPORT?</Text>
          <Text style={style.desc}>
            {' '}
            Currently we support translations for English to/from Spanish and
            English to/from Madarin Chinese, though our hope is to expand to
            additional languages as we grow the OYA community.
          </Text>

          <Text style={style.title}> DO YOU PROVIDE LEGAL ADVICE?</Text>
          <Text style={style.desc}>
            {' '}
            No, the intention of OYA is not to provide advice, legal or
            otherwise. OYA volunteers have not been certified or verified as
            legal professionals.
          </Text>

          <Text style={style.title}>
            DO YOU REPORT OR SHARE ANY INFORMATION DISCUSSED WITH LAW
            ENFORCEMENT OR OTHER AGENCIES?
          </Text>
          <Text style={style.emphesis}>
            Our mission is to bring people together without fear.
          </Text>
          <Text style={style.desc}>
            The only identifiable information we collect is from volunteers to
            verify that their intention is to give accurate information to those
            seeking assistance. Users do not need to supply any personal
            information to use OYA.
          </Text>

          <Text style={style.desc}>
            Information such as immigration status are not collected, stored or
            reported for volunteers or users. Volunteers should never ask you
            for personally identifiable or immigration status information. If
            they do, please let us know right away and end your session.
          </Text>

          <Text style={style.desc}>
            That being said, if you make threats or ask volunteers to assist
            with illegal activities they will be forced to end your session and
            pending the severity of the comments, those may be reported to the
            police.
          </Text>
        </ScrollView>
      </View>
    );
  }

  handleBackPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Home');
  };
}

export default Aboutscreen;
