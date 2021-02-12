import React, {
  useState,
  useEffect,
  Component,
  useImperativeHandle,
} from 'react'
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
  Button,
  Platform,
  Dimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ActionSheet, Root } from 'native-base'
import ImagePicker from 'react-native-image-crop-picker'

export default class Lab5try extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [],
    }
  }

  onSelectImage = (image) => {
    let newDataImage = this.state.fileList
    const source = { uri: image.path }
    let item = {
      id: Data.now(),
      url: source,
      content: image.data,
    }
    newDataImage.push(item)
    this.setState({ fileList: newDataImage })
  }

  renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item.url} />
      </View>
    )
  }

  takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.onSelectImage(image)
      console.log(image)
    })
  }

  chosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.onSelectImage(image)
      console.log(image)
    })
  }

  AddImage = () => {
    const BUTTONS = ['Take photo', 'Choose photo', 'Cancel']
    ActionSheet.show(
      { options: BUTTONS, cancelButtonIndex: 2, title: 'Select a photo' },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.takePhoto()
            break
          case 1:
            this.chosePhoto()
            break
          default:
            break
        }
      }
    )
  }

  render() {
    let vari = (8127 % 6) + 1
    let { fileList } = this.state
    return (
      <Root>
        <View style={styles.phone}>
          <View style={styles.View}>
            <Text>
              Lab 5{'\n'}variant - {vari}
            </Text>
            <TouchableOpacity onPress={this.AddImage}>
              <Ionicons name="add-circle" size={40} color="blue" />
            </TouchableOpacity>
          </View>
          <View style={styles.screen}>
            <FlatList
              data={fileList}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              extraData={this.state}
            />
          </View>
        </View>
      </Root>
    )
  }
}
// resizeMode: 'contain'
//  for image style

const styles = StyleSheet.create({
  View: {
    marginTop: 30,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  screen: {
    flex: 1,
    width: '99%',
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#FFF9FF',
  },
  phone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8ECFF',
  },
})
