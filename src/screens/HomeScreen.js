import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native';
import {SafeAreaView,StatusBar,Text,StyleSheet} from 'react-native';

const HomeScreen=(props) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>Home</Text>
                <Image
                    source={{uri: "https://source.unsplash.com/random?sig=4"}}
                    containerStyle={styles.item}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </SafeAreaView>
        </>
    );
};

const styles=StyleSheet.create({
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
});


export default HomeScreen;