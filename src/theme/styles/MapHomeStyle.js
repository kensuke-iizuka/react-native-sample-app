import { BaseBackgroundColor, BaseFontColor } from './base/BaseStyle';

const MapHomeStyles = {
  container: {
    // 使ってない
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    content: {
      backgroundColor: BaseBackgroundColor,
    },
    text: {
      color: BaseFontColor,
      fontSize: 15,
      fontWeight: 'bold',
    },
  },
  footer: {
    button: {
      backgroundColor: BaseBackgroundColor,
      marginHorizontal: 30,
      marginVertical: 5,
    },
    buttontext: {
      color: BaseFontColor,
    },
  },
};

export default MapHomeStyles;
