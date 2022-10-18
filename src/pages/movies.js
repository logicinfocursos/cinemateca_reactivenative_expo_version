import { useState, useEffect } from 'react'
import { Text, View, Image, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from './movies.style'
import { StatusBar } from 'expo-status-bar'
import { __SETUP__ } from '../config/setup'
import { apiGET } from '../services/apiGET'


export default function Movies({ navigation }) {

    const [movies, setMovies] = useState(null)
    const [totalPages, setTotalPages] = useState(25)
    const [actualPage, setActualPage] = useState(1)



    const fetchdata = async (page) => {

        const result = await apiGET({ page })
        setMovies(result)
    }



    useEffect(() => {

        fetchdata(actualPage)

    }, [])

    if (!movies) return null


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar
                animated={true}
                backgroundColor='orange'
            />

            <View style={{ height: 40 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                    horizontal={true}
                >
                    <Pagination
                        totalPages={totalPages}
                        fetchdata={fetchdata}
                        setActualPage={setActualPage}
                        actualPage={actualPage}
                    />
                </ScrollView>
            </View>

            <FlatList
                data={movies}
                renderItem={({ item }) => <GridItem item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}


export function GridItem({ item, navigation }) {

    const image = __SETUP__.API_IMG_PATH + item.poster_path
    const overview_maxlength = 100
    const title_maxlength = 50
    const { title, original_title, poster_path, overview } = item

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Movie', item)}
            style={styles.card}
        >
            <Image
                source={{ uri: image }}
                style={styles.card_image}
            />

            <View style={styles.card_details}>
                <Text style={styles.card_title}>{title}</Text>
                <Text style={styles.card_original_title}>{original_title}</Text>
                <Text style={styles.card_overview}>{overview.substr(0, overview_maxlength)}{overview.length > overview_maxlength ? ' (...)' : ''}</Text>
            </View>
        </TouchableOpacity>
    )
}


export function Pagination({ totalPages, fetchdata, setActualPage, actualPage }) {

    const pages = []

    for (let p = 1; p <= totalPages; p++) {
        pages.push(p)
    }

    return (
        <View style={{ flex: 1, flexDirection: 'row', color: 'red', marginTop: 1 }}>
            {
                pages.map((item, key) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { changePage(item, fetchdata, setActualPage) }}
                            key={key}
                            style={styles.pagination_button}
                        >
                            <Text style={{ color: item == actualPage ? 'red' : 'black' }}>{item.toString()}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export const changePage = (page, fetchdata, setActualPage) => {
    setActualPage(page)
    fetchdata(page)
}