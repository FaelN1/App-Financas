import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({ currencySymbol, balance, expenses }) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Saldo
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>
                        {currencySymbol}
                    </Text>
                    <Text style={styles.balance}>
                        {balance}
                    </Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Gastos
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>
                        {currencySymbol}
                    </Text>
                    <Text style={styles.expenses}>
                        {expenses}
                    </Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: '#dadada',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol: {
        color: "#dadada",
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }
})