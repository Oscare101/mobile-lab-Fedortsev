import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native'
import { Icon } from 'react-native-elements'
import axios from 'axios'
// import book from './book.json'
import Item from './ListBook'

var book = [
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
    name: 'Annual Minecraft 2021',
    author: 'Mojang AB',
    img: require('../img/minecraft.jpg'),
    description: 'The official Minecraft Annual 2021',
    review:
      'Featuring all the latest news in the world of Minecraft, the official Minecraft annual is a must have for all Minecraft fans. Discover the latest updates and the newest games, and find out insider info directly from the Mojang team about everything that has happened in the world of Minecraft over the past year, including features about the bee update, Minecraft Dungeons and Minecraft Earth.',
    price: '28$',
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

export default function Lad6() {
  const [searchText, setSearchText] = useState('')
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  useEffect(() => {
    setBooks(book)
  }, [])
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={styles.container}>
        <Text>Lab 6 Variant 2</Text>
        <View style={styles.searchView}>
          <View style={styles.inputView}>
            <TextInput
              defaultValue={searchText}
              style={styles.input}
              placeholder="Search"
              textContentType="name"
              onChangeText={(text) => {
                setSearchText(text)
                if (text === '') {
                  return setFilteredBooks([])
                }
                const filtered_book = books.filter((data) =>
                  data.name.toLowerCase().startsWith(text.toLowerCase())
                )
                setFilteredBooks(filtered_book)
              }}
              returnKeyType="search"
            />
            {searchText.length === 0 ? (
              <TouchableOpacity>
                <Icon name="search" size={24} color="#333" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setSearchText('')
                  setFilteredBooks([])
                }}
              >
                <Icon name="cancel" size={24} color="#333" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {filteredBooks.length > 0 ? (
          <ScrollView>
            {filteredBooks.map((book) => (
              <TouchableOpacity>
                <Item
                  img={book.img}
                  title={book.name}
                  description={book.description}
                  price={book.price}
                  author={book.author}
                  review={book.review}
                />
              </TouchableOpacity>
            ))}
            <View style={{ height: 50 }}></View>
          </ScrollView>
        ) : searchText.length > 0 ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>No items</Text>
          </View>
        ) : (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>Search </Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  searchView: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputView: {
    flex: 1,
    height: 40,
    backgroundColor: '#dfe4ea',
    paddingHorizontal: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
  },
  userCard: {
    backgroundColor: '#fafafa',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
  messageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBoxText: {
    fontSize: 20,
    fontWeight: '500',
  },
})
