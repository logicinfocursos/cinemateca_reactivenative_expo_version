import { useState } from 'react'
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import { styles } from './movie.style'
import { __SETUP__ } from '../config/setup'



export default function Movies({ route }) {

    const [movie] = useState(route.params)

    if (!movie) return null


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <GridItem
                item={movie}
            />
        </SafeAreaView>
    )
}


export function GridItem({ item }) {

    const image = __SETUP__.API_IMG_PATH  + item.poster_path

    return (
        <SafeAreaView>
            <ScrollView>

                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
                
                <View style={styles.details}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.original_title}>{item.original_title}</Text>
                    <Text style={styles.overview}>{item.overview}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
