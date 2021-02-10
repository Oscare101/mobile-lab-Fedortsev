import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import Books from './Books'
import { Ionicons } from '@expo/vector-icons'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
const Variant = () => {
  let vari = (8127 % 2) + 1
  return <Text>variant - {vari}</Text>
}

const Item = ({ img, title, text, price, review, author }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <Text style={styles.header}>{title}</Text>

          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <View>
              <Img num={img} style={{ height: 100, width: 100 }} />
              <TouchableOpacity>
                <View style={styles.buy}>
                  <Ionicons name="cart" color="lightblue" size={30} />
                  <Text style={{ fontSize: 24 }}>{price}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView>
              <Text>Author:{author}</Text>
              <Text style={{ width: '80%', fontSize: 20 }}>
                Review: {'\n'} {review} {'\n'}
              </Text>
              <View style={{ height: 30 }}></View>
            </ScrollView>
          </View>

          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.close}
          >
            <Ionicons name="close" size={50} />
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.block}
        onPress={() => setModalVisible(true)}
      >
        <Img num={img} />
        <View style={{ flexDirection: 'column', width: '70%' }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

class Lab3 extends React.Component {
  constructor() {
    super()
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    }
  }

  componentDidMount() {
    let data = Books
    this.setState({
      dataBackup: data,
      dataSource: data,
    })
  }

  filterItem = (event) => {
    let query = event.nativeEvent.text
    this.setState({
      query: query,
    })
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      })
    } else {
      var data = this.state.dataBackup
      query = query.toLowerCase()
      data = data.filter((l) => l.name.toLowerCase().match(query))

      this.setState({
        dataSource: data,
      })
    }
  }

  separator = () => {
    return (
      <View>
        <Text>-----------------</Text>
      </View>
    )
  }

  render() {
    const renderItem = ({ item }) => (
      <Item
        img={item.img}
        title={item.title}
        price={item.price}
        text={item.text}
        review={item.review}
        author={item.author}
      />
    )

    return (
      <View style={styles.container}>
        <Text>lab 4</Text>
        <Variant />
        <View style={{ flexDirection: 'row' }}></View>
        <TextInput
          placeholder="search"
          style={styles.input}
          value={this.state.query}
          onChangeText={this.filterItem.bind(this)}
        />
        <ScrollView>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={() => this.separator()}
            // keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.block}>
                  <Image source={item.img} />
                  <Text>{item.title}</Text>
                </View>
              )
            }}
            // renderItem={renderItem}
            // ListEmptyComponent={() => <Text>No results</Text>}
          />
        </ScrollView>
      </View>
    )
  }
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
    width: '100%',
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
  img: { height: 100, width: 100 },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modal: {
    padding: 20,
  },
  header: {
    fontSize: 24,
  },
  buy: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: '60%',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
  },
})

export default Lab3
