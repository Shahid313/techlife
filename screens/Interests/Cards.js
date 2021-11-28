import React from "react"
import {Text, View, Image, ImageBackground} from 'react-native'
import styles from "./styles"

const cards = [
    {
        "id":"1",
        "name":"Politics",
        "image":require('../../assets/cardsImages/image1.jpg')
    },{
        "id":"2",
        "name":"Sports",
        "image":require('../../assets/cardsImages/image2.jpg')
    },{
        "id":"3",
        "name":"Business",
        "image":require('../../assets/cardsImages/image3.jpg')
    },{
        "id":"4",
        "name":"Culture",
        "image":require('../../assets/cardsImages/image4.jpg')
    },{
        "id":"5",
        "name":"Birthdays",
        "image":require('../../assets/cardsImages/image5.jpg')
    },{
        "id":"6",
        "name":"Politics",
        "image":require('../../assets/cardsImages/image6.jpg')
    },{
        "id":"7",
        "name":"Politics",
        "image":require('../../assets/cardsImages/image7.jpg')
    },{
        "id":"8",
        "name":"Politics",
        "image":require('../../assets/cardsImages/image8.jpg')
    },{
        "id":"9",
        "name":"Politics",
        "image":require('../../assets/cardsImages/image8.jpg')
    },{
        "id":"10",
        "name":"Politics",
        "image":require('../../assets/cardsImages/image8.jpg')
    },{
        "id":"11",
        "name":"Politics",
        "image":require('../../assets/cardsImages/image8.jpg')
    },{
        "id":"12",
        "name":"Politics",
        "image":require('../../assets/cardsImages/image8.jpg')
    }
]

class Cards extends React.Component{
    render(){
        return(
            <View style={styles.Cards}>
                {cards.map((item) => (
                    <View key={item.id} style={styles.SingleCard}>
                        <Image style={styles.CardImage} source={item.image}/>
                    </View>
                ))}
            </View>
        )
    }
}

export default Cards