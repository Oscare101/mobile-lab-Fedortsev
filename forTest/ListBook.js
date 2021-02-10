import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'

const Item = ({ img, title, description, price, review, author }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <Text style={styles.header}>{title}</Text>
          <Image source={img} style={styles.img} />
          <View style={{ flexDirection: 'column', paddingTop: 20 }}>
            <View>
              <TouchableOpacity>
                <View style={styles.buy}>
                  <Ionicons name="cart" color="lightblue" size={30} />
                  <Text style={{ fontSize: 24 }}>{price}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text>Author: {author}</Text>
            <ScrollView>
              <Text style={{ width: '80%', fontSize: 20 }}>
                Review: {'\n'} {review} {'\n'}
              </Text>
              <View style={{ height: 170 }}></View>
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
        <Image style={styles.img} source={img} />
        <View style={{ flexDirection: 'column', width: '70%' }}>
          <Text style={styles.title}>{title}</Text>
          <Text>{description}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </TouchableOpacity>
    </>
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
  img: { height: 120, width: 120 },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modal: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 24,
  },
  buy: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
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

export default Item
