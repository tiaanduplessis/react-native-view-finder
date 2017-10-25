import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

/**
 * A flexible little View Finder component to be used in conjunction with react-native-camera
 */
const ViewFinder = ({
                        backgroundColor,
                        containerStyle,
                        height,
                        width,
                        borderWidth,
                        borderRadius,
                        color,
                        loading,
                        loadingBelowVF,
                        borderLength
                    }) => (
    <View style={[styles.container, containerStyle, { backgroundColor }]}>
        <View style={[styles.viewfinder, { backgroundColor }, { width, height }]}>
            <View
                style={[
                    styles.topLeftEdge,
                    {
                        height: borderLength,
                        width: borderLength,
                        borderColor: color,
                        borderLeftWidth: borderWidth,
                        borderTopWidth: borderWidth,
                        borderTopLeftRadius: borderRadius
                    }
                ]}
            />
            <View
                style={[
                    styles.topRightEdge,
                    {
                        height: borderLength,
                        width: borderLength,
                        borderColor: color,
                        borderRightWidth: borderWidth,
                        borderTopWidth: borderWidth,
                        borderTopRightRadius: borderRadius
                    }
                ]}
            />
            <View
                style={[
                    styles.bottomLeftEdge,
                    {
                        height: borderLength,
                        width: borderLength,
                        borderColor: color,
                        borderLeftWidth: borderWidth,
                        borderBottomWidth: borderWidth,
                        borderBottomLeftRadius: borderRadius
                    }
                ]}
            />
            <View
                style={[
                    styles.bottomRightEdge,
                    {
                        height: borderLength,
                        width: borderLength,
                        borderColor: color,
                        borderRightWidth: borderWidth,
                        borderBottomWidth: borderWidth,
                        borderBottomRightRadius: borderRadius
                    }
                ]}
            />
            {loading && (
                <View>
                    <ActivityIndicator style={[loadingBelowVF ? { top: (height - 50)}: loadingBelowVF]} animating={loading} color={color} size='large' />
                </View>
            )}
        </View>
    </View>
)

ViewFinder.propTypes = {
    /**
     * Background color of View Finder
     */
    backgroundColor: PropTypes.string,
    /**
     * Style View Finder outer container
     */
    containerStyle: PropTypes.object,
    /**
     * Border with of View Finder edges
     */
    borderWidth: PropTypes.number,
    /**
     * Border Radius of View Finder edges
     */
    borderRadius: PropTypes.number,
    /**
     * Border length of View Finder edges
     */
    borderLength: PropTypes.number,
    /**
     * Color of View finder edges and Spinner
     */
    color: PropTypes.string,
    /**
     * Height of View Finder
     */
    height: PropTypes.number,
    /**
     * Bool to indicate if loading indicator should be shown
     */
    loading: PropTypes.bool,
     /**
     * Bool to indicate if loading indicator should be shown under View Finder
     */
    loadingBelowVF: PropTypes.bool,
    /**
     * Width of View Finder
     */
    width: PropTypes.number
}

ViewFinder.defaultProps = {
    containerStyle: {},
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderRadius: 0,
    borderLength: 25,
    color: '#fff',
    height: 200,
    loading: false,
    width: 200
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    viewfinder: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    topLeftEdge: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    topRightEdge: {
        position: 'absolute',

        top: 0,
        right: 0
    },
    bottomLeftEdge: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    bottomRightEdge: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
})

export default ViewFinder