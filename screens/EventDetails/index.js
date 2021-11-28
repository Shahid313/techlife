import React from "react"
import { SafeAreaView, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from "react-native"
import styles from "./styles"

const allPosts = [
    {
        "id":"1",
        "image":require('../../assets/cardsImages/image1.jpg'),
    },{
        "id":"2",
        "image":require('../../assets/cardsImages/image2.jpg')
    },{
        "id":"3",
        "image":require('../../assets/cardsImages/image3.jpg'),
    },{
        "id":"4",
        "image":require('../../assets/cardsImages/image4.jpg'),
    }
]

class EventDetails extends React.Component{
    render(){
        return(
            <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.Card}>
                <Text style={styles.EventDetailsStyle}>Event Details</Text>
                <Image style={styles.DetailImage} source={require('../../assets/cardsImages/image1.jpg')}/>
                <Text style={styles.Name}>Copy Free Code Camp Columbus - Pair Programming</Text>
                <Text style={styles.EventDescription}>Event Description</Text>
                <Text style={styles.FirstSectionOfText}>Meet up with fellow Free Code Campers to work together on projects, apps, algorithms, tutorials - whatever you're working on right now! Coding newbies welcome and encouraged.</Text>
                <View style={styles.VisitOurSite}>
                <Text style={styles.SecondSectionOfText}>Visit our website : </Text>
                <TouchableOpacity>
                    <Text style={styles.fcccolumbusDotCom}>fcccolumbus.com</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.FollowUsOnFaceBook}>
                <Text style={styles.ThirdSectionOfText}>follow us on Facebook : </Text>
                <TouchableOpacity>
                    <Text style={styles.freeCodeCampColumbs}>free.code.camp.columbus</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.WorkTogetherOnProjects}>
                <Text style={styles.WeAreMeetingUp}>We are meeting in-person at the CoHatch Upper Arlington location. The CoHatch Covid policy is "mask optional" for all attendees. <TouchableOpacity><Text style={styles.SeeMore}>See more</Text></TouchableOpacity></Text>
                </View>
                <Text style={styles.SimilarEventsNearBy}>Similar events nearby</Text>
                <View style={styles.SimilarEvent}>
                <FlatList
                data={allPosts}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <View key={item.id} style={styles.SimilarEventCard}>
                    <Image style={styles.SimilarEventImage} source={item.image}/>
                    </View>
                )}
                />
                </View>
                </View>
            </SafeAreaView>
            </ScrollView>
        )
    }
}

export default EventDetails