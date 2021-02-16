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
} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

const width = Dimensions.get('window').width

const Variant = () => {
  let vari = (8127 % 6) + 1
  return <Text style={styles.header}>Lab 5 variant - {vari}</Text>
}

export default function ImagePickerExample() {
  return (
    <>
      <Variant />
      <ScrollView style={{ flex: 1 }}>
        <Grid>
          <Col style={styles.col}>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Text>1.1</Text>
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Text>1.2</Text>
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Text>1.3</Text>
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={styles.view}>
                <Text>1.4</Text>
              </View>
            </Row>
          </Col>
          <Col style={{ width: width / 1.5 }}>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Text>2.1</Text>
                </View>
              </Col>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Text>2.2</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ height: width / 1.5 }}>
              <View style={styles.view}>
                <Text>2.3</Text>
              </View>
            </Row>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Text>2.4</Text>
                </View>
              </Col>
              <Col style={styles.col}>
                <View style={styles.view}>
                  <Text>2.5</Text>
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
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    margin: 1,
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
})
