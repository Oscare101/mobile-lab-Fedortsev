import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Item from './ListBook'
const { width, height } = Dimensions.get('window')

export default class First extends Component {
  constructor() {
    super()
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    }
  }

  componentDidMount() {
    var data = [
      {
        name: 'English File',
        author: 'Christiana Latham-Koening',
        img: require('../img/English.png'),
        description: 'english book for learning grammar. Oxfor edition.',
        review:
          'This book is written for learning English, suitable for all levels, a textbook with assignments is attached, access to a site with audio and video material for additional study',
        price: '20$',
      },
      {
        name: 'Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        img: require('../img/Sherlock.jpeg'),
        description: 'Thegreatest book about the gretes detective',
        review:
          'The layout of The Sherlock Holmes Book is easy to follow and intuitive. The section breakdown – Introduction, Early Adventures, The Great Detective, A Legend Returns, Holmes Takes a Bow, The Final Deductions, and The World of Sherlock Holmes – takes the reader logically and chronologically through the cases.',
        price: '16$',
      },
      {
        name: 'Adoby Photoshop CS5',
        author: 'Scott Kelby',
        img: require('../img/Adobe.jpeg'),
        description: 'tutorial for photoshop',
        review:
          'Creative professionals seeking the fastest, easiest, most comprehensive way to learn Adobe Photoshop CS5 choose Adobe Photoshop CS5 Classroom in a Book from the Adobe Creative Team at Adobe Press. The 14 project-based lessons in this book show readers step-by-step the key techniques for working in Photoshop CS5. In addition to learning the key elements of the Photoshop interface, this completely revised CS5 edition shows readers how to edit images with precise selection control, correct a wide range of lens-based errors, interactively transform their images with the new Puppet Warp tool, and easily remove or replace image elements with the new Content-Aware Fill mode. The book also covers new powerful painting effects to artistically enhance images and shows how to combine multiple exposures into a single HDR image.',
        price: '50$',
      },
      {
        name: 'Kaudasheva Simya',
        author: 'Ivan Semyonovich Nechuy-Levitsky',
        img: require('../img/Kay.jpeg'),
        description: 'Popular Ukrainian plot of family in countryside.',
        review:
          'The social and everyday story "The Kaidashe Family" is one of the most famous works of the classic of Ukrainian literature Ivan Nechuy-Levytsky. ABOUT THE AUDIO BOOK KAYDASHS FAMILY The work describes the events that take place in a large rural Kaidash family. The book fascinates with colorful characters, genuine humor, funny and witty dialogues, beautiful landscapes and scenes of sincere love. On the example of one Ukrainian family, Ivan Nechuy-Levytsky depicts the Ukrainian national color and shows how the social order, the way of organizing the community, the behavior of the clergy lead to the decline of the human spirit.',
        price: '4$',
      },
      {
        name: 'Clean code',
        author: 'Robert Martin',
        img: require('../img/Clean.jpeg'),
        description:
          'Read with the free Kindle apps (available on iOS, Android, PC & Mac), Kindle E-readers and on Fire',
        review:
          'I guess Clean Code by Robert C. Martin doesn’t need an introduction. I knew the book well before I read it. Even though I’m quite comfortable with my own coding best practices, I read it to confirm my coding practices and to be able to discuss it with any fanatic “Clean Code” disciple I happen to meet. The book contains mostly small and easily digestible chapters, which get (a lot) longer and (a lot) more tiring towards the end of the book. It uses Java for most code examples and even some Java-specific frameworks in the discussions, so you get the most of it if you’re familiar with Java. The book starts with isolated coding practices around naming and functions and becomes more broad and general in the end, discussing systems, concurrency and code smells.',
        price: '28$',
      },
    ]

    this.setState({
      dataBackup: data,
      dataSource: data,
    })
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text
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

  render() {
    console.disableYellowBox = true
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="grey" />
        <View style={styles.header}>
          <TextInput
            placeholder="Enter Text..."
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item, index }) => {
            return (
              <>
                <TouchableOpacity>
                  <Item
                    img={item.img}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    author={item.author}
                    review={item.review}
                  />
                  {/* <View style={styles.bookContainer}>
                    <Image style={styles.image} source={item.img} />
                    <View style={styles.dataContainer}>
                      <Text numberOfLines={1} style={styles.title}>
                        {item.name}
                      </Text>
                      <Text numberOfLines={4} style={styles.description}>
                        {item.description}
                      </Text>
                      <Text style={styles.author}>{item.author}</Text>
                    </View>
                  </View> */}
                </TouchableOpacity>
              </>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: 'grey',
  },
  bookContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    height: 150,
    width: 90,
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: width - 100,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  author: {
    fontSize: 16,
  },
})
