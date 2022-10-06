import React from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeAreaView,StatusBar,Text,StyleSheet,Image} from 'react-native';

const HomeScreen=(props) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>Home544 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi rerum quam fugiat vel, totam eveniet quisquam, dignissimos at delectus, quis quod obcaecati ducimus dolor enim voluptatem magni necessitatibus vitae.</Text>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis, aspernatur eos magnam fugiat beatae ipsa nemo labore eum! Neque suscipit ut unde maxime nam enim labore voluptatibus quisquam asperiores.</Text>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi explicabo, ipsa quos et magni laudantium ullam voluptate architecto, eligendi quia eveniet ab deserunt tempore eos, sed libero natus illum minima.</Text>
            </SafeAreaView>
        </>
    );
};

const styles=StyleSheet.create({

});


export default HomeScreen;