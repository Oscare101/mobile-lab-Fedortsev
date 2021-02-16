import React, { useState, useEffect } from 'react'
import {
  Button,
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'

const width = Dimensions.get('window').width
const IMG = []
const Variant = () => {
  let vari = (8127 % 6) + 1
  return <Text style={styles.header}>Lab 5 variant - {vari}</Text>
}

export default function Lab5() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    console.log(result)
    IMG.push(result.uri)
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }
  console.log(' = -----------')
  console.log(IMG)
  console.log('----------- = ')
  return (
    <>
      <Variant />
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.add}>
          <Text>add photo</Text>
        </View>
      </TouchableOpacity>
      <ScrollView style={{ flex: 1 }}>
        <Grid>
          <Col style={styles.col}>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[0] }} style={styles.img} />
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[3] }} style={styles.img} />
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[5] }} style={styles.img} />
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[6] }} style={styles.img} />
              </View>
            </Row>
          </Col>
          <Col style={{ width: width / 1.5 }}>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Image source={{ uri: IMG[1] }} style={styles.img} />
                </View>
              </Col>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Image source={{ uri: IMG[2] }} style={styles.img} />
                </View>
              </Col>
            </Row>
            <Row style={{ height: width / 1.5 }}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[4] }} style={styles.img} />
              </View>
            </Row>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Image source={{ uri: IMG[7] }} style={styles.img} />
                </View>
              </Col>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Image source={{ uri: IMG[8] }} style={styles.img} />
                </View>
              </Col>
            </Row>
          </Col>
        </Grid>
        <Grid>
          <Col style={styles.col}>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[9] }} style={styles.img} />
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[12] }} style={styles.img} />
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[14] }} style={styles.img} />
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[15] }} style={styles.img} />
              </View>
            </Row>
          </Col>
          <Col style={{ width: width / 1.5 }}>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Image source={{ uri: IMG[10] }} style={styles.img} />
                </View>
              </Col>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Image source={{ uri: IMG[11] }} style={styles.img} />
                </View>
              </Col>
            </Row>
            <Row style={{ height: width / 1.5 }}>
              <View style={styles.view}>
                <Image source={{ uri: IMG[13] }} style={styles.img} />
              </View>
            </Row>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Image source={{ uri: IMG[16] }} style={styles.img} />
                </View>
              </Col>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Image source={{ uri: IMG[17] }} style={styles.img} />
                </View>
              </Col>
            </Row>
          </Col>
        </Grid>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 1,
    overflow: 'hidden',
  },
  col: {
    width: width / 3,
  },
  row: {
    height: width / 3,
  },
  header: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
  },
  img: { width: '100%', height: '100%' },
  add: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    padding: 5,
  },
})
