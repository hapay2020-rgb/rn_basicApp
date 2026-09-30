import {StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
      ]}>

        {/* 
            flexDirection: column, (기본값)
            flexDirection: column 인 경우
                1. flex item의 배열은 세로 배열
                2• alignltmes의 정렬은 수평정별
                3• justifyContent의 정렬은 수직정별
            flexDirection: row 인 경우
                1. flex item의 배열은 가로 배열
                2• alignltems의 정별은 수직정별
                3• justifyContent의 정렬은 수평정별
      */}
      {/* <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} /> */}
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'darkorange'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Flex;