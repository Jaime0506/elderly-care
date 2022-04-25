import React from 'react'
import {View, Text, StyleSheet, Document, Page} from '@react-pdf/renderer'

export default function SamplePDF() {
  return (
    <Document>
        <Page 
            size="A4"
            style={{
                display: "flex",
                width: '100%',
                backgroundColor: 'white',
                flexDirection: 'column',
            }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    A Sample PDF file
                </Text>
                <Text style={styles.subtitle}>
                    Este pdf es de ejemplo, y esta creado por react pdf, de una manera rara.
                </Text>
            </View>  
        </Page>
    </Document>
   
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        textAlign: 'justify',
        padding: 30
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    subtitle: {
        fontSize: 14,
    }
})
