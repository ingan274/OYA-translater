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
          <Text style={style.title}> ¿QUE ES OYA? </Text>
          <Text style={style.desc}>
            {' '}
            Oya es un servicio GRATUITO de traducción entre pares que lo conecta
            con hablantes bilingües capaces de brindarle traducción y
            contexto ya sea para frases simples o para ayudarlo a facilitar un
            conversacion. Ya sea para comunicarse mejor con un ser querido,
            compañero de trabajo o haga una solicitud a su arrendador. Voluntarios de OYA
            ayudarlo con qué decir y cómo decirlo.
          </Text>

          <Text style={style.title}> ¿CUÁNTO CUESTA?</Text>
          <Text style={style.desc}>
            {' '}
            OYA es un servicio totalmente gratuito. Los voluntarios nunca deberían pedirte
            pago u otra información personal o confidencial. Si lo hacen,
            háganos saber de inmediato y finalice su sesión.
          </Text>

          <Text style={style.title}> ¿QUÉ IDIOMAS APOYAS?</Text>
          <Text style={style.desc}>
            {' '}
            Actualmente admitimos traducciones de inglés a / desde español y
            Inglés a / desde chino mandarín, aunque nuestra esperanza es expandirnos a
            idiomas adicionales a medida que crecemos la comunidad OYA.
          </Text>

          <Text style={style.title}> ¿PROPORCIONA ASESORAMIENTO LEGAL?</Text>
          <Text style={style.desc}>
            {' '}
            No, la intención de OYA no es brindar asesoramiento, legal o
            de otra manera. Los voluntarios de OYA no han sido certificados o verificados como
            profesionales del derecho
          </Text>

          <Text style={style.title}>
            ¿REPORTA O COMPARTE CUALQUIER INFORMACIÓN DISCUTIDA CON LA LEY APLICACIÓN U OTRAS AGENCIAS?
          </Text>
          <Text style={style.emphesis}>
            Nuestra misión es unir a las personas sin miedo.
          </Text>
          <Text style={style.desc}>
            La única información identificable que recopilamos es de voluntarios para
                        verificar que su intención es dar información precisa a aquellos
                        buscando ayuda Los usuarios no necesitan proporcionar ningún personal
                        información para usar OYA.
          </Text>

          <Text style={style.desc}>

            La información como el estado de inmigración no se recopila, almacena o informa a voluntarios o usuarios. Los voluntarios nunca deben pedirle información de identificación personal o del estado de inmigración. Si
            lo hacen, háganoslo saber de inmediato y finalice su sesión.
          </Text>

          <Text style={style.desc}>

            Dicho esto, si haces amenazas o pides ayuda a voluntarios
                        con actividades ilegales se verán obligados a finalizar su sesión y
                        En espera de la severidad de los comentarios, estos pueden ser reportados al
                        policía.
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
