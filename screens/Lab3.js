import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from 'react-native'
import Books from './Books'

const Variant = () => {
  let vari = (8127 % 2) + 1
  return <Text>variant - {vari}</Text>
}

const List = () => {
  return <Text>qwsxcvbnm</Text>
}

// for (let i = 0; i < 5; i++) {    // это работает
//   {
//     Object.keys(Books[i]).map((list) => {
//       console.log(list, Books[i][list])
//     })
//   }
// }

// const BookList = () => {       // а это нет
//   for (let i = 0; i < 5; i++) {//выводит только 1-й элемент и все
//     {
//       return Object.keys(Books[i]).map((list) => (

//         <Text key={list}>
//           {list} - {Books[i][list]}
//         </Text>
//       ))
//     }
//   }
// }

const Img = (num) => {
  if (num.num == 1) {
    return <Image source={require('../img/English.png')} style={styles.img} />
  } else if (num.num == 2) {
    return <Image source={require('../img/Sherlock.jpeg')} style={styles.img} />
  } else if (num.num == 3) {
    return <Image source={require('../img/Adobe.jpeg')} style={styles.img} />
  } else if (num.num == 4) {
    return <Image source={require('../img/Kay.jpeg')} style={styles.img} />
  } else if (num.num == 5) {
    return <Image source={require('../img/Clean.jpeg')} style={styles.img} />
  }
}

const Item = ({ img, title, text, price }) => (
  <View style={styles.block}>
    <Img num={img} />
    <View style={{ flexDirection: 'column', width: '70%' }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </View>
)

const Lab3 = () => {
  const renderItem = ({ item }) => (
    <Item
      img={item.img}
      title={item.title}
      price={item.price}
      text={item.text}
    />
  )
  return (
    <View style={styles.container}>
      <Text>lab 3</Text>
      <Variant />
      {/* <BookList /> */}

      <ScrollView>
        <FlatList
          data={Books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
  },
  text: {
    fontSize: 16,
  },
  price: {
    color: 'blue',
  },
  img: { height: 70, width: 70 },
})

export default Lab3
