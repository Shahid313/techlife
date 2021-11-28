import React from "react"
import { SafeAreaView, View, Text, FlatList, Image } from "react-native"
import styles from "./styles"

const allPosts = [
    {
        "id":"1",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image1.jpg'),
        "date":"Mon, Dec 22",
        "time":"01:00 PM"
    },{
        "id":"2",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image2.jpg'),
        "date":"Mon, Dec 22",
        "time":"01:00 PM"
    },{
        "id":"3",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image3.jpg'),
        "date":"Mon, Dec 22",
        "time":"01:00 PM"
    },{
        "id":"4",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "date":"Mon, Dec 22",
        "time":"01:00 PM"
    },{
        "id":"5",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "date":"Mon, Dec 22",
        "time":"01:00 PM"
    },{
        "id":"6",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "date":"Mon, Dec 22",
        "time":"01:00 PM"
    },
]

class Going extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                data={allPosts}
                renderItem={({item}) => (
                    <View key={item.id} style={styles.Card}>
                        <View style={styles.Information}>
                            <Text style={styles.PostName}>{item.name}</Text>
                            <View style={styles.ClockAndCalender}>
                                <View style={styles.CalenderAndDate}>
                                    <Image style={styles.CalendarSize} source={require('../../assets/calender.png')}/>
                                    <Text style={styles.Date}>{item.date}</Text>
                                </View>

                                <View style={styles.ClockAndTime}>
                                    <Image style={styles.ClockSize} source={require('../../assets/clock.png')}/>
                                    <Text style={styles.Time}>{item.time}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.PostImage}>
                            <Image style={styles.PostImageStyle} source={item.image}/>
                        </View>
                    </View>
                )}
                />
            </SafeAreaView>
        )
    }
}

export default Going