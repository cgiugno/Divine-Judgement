import React from 'react';
import {View, StyleSheet} from 'react-native';

const Stat = (props) => {
    const { statStyles, statMultiplier, pillarWidth } = props;
    return (
        <View style={[styles.stat, statStyles, { width: pillarWidth * (0.7) / 4, height: (pillarWidth * (0.7 * 0.25) * statMultiplier) }]}></View>
    );
}
const styles = StyleSheet.create({
    stat: {
        flex: 1,
    },
});

export default Stat;