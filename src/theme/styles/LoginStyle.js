import { BaseBackgroundColor, BaseFontColor } from './base/BaseStyle';

const LoginStyles = {
  container: {
    flexDirection: 'column',
    backgroundColor: BaseBackgroundColor,
    alignItems: 'center',
  },
  top: {
    bigtext1: {
      color: BaseFontColor,
      fontSize: 25,
      textAlign: 'center',
    },
    bigtext2: {
      marginTop: 10,
      color: BaseFontColor,
      fontSize: 45,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    smalltext: {
      color: BaseFontColor,
      fontSize: 15,
      textAlign: 'center',
    },
    content: {
      marginTop: 180,
      marginHorizontal: 20,
    },
  },
  text: {
    color: BaseFontColor,
    fontSize: 10,
  },
  body: {
    content: {
      marginTop: 200,
      marginHorizontal: 30,
    },
    button: {
      backgroundColor: BaseFontColor,
      marginHorizontal: 20,
    },
    buttontext: {
      color: BaseBackgroundColor,
    },
    text: {
      color: BaseFontColor,
      fontSize: 12,
      textAlign: 'left',
      marginVertical: 20,
      marginHorizontal: 20,
      marginBottom: 30,
      lineHeight: 20,
    },
  },
  login: {
    button: {
      marginHorizontal: 135,
      marginVertical: 20,
    },
    text: {
      color: BaseFontColor,
    },
  },
};

export default LoginStyles;
