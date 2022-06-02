import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Display = ({value}) => {
  return (
    <View style={styles.dispaly}>
      <Text style={styles.dipslayValue}>{value}</Text>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({
  dispaly: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
  },
  dipslayValue: {
    fontSize: 60,
    color: '#fff',
  }

})