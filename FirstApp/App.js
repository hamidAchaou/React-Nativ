import React, { useState } from "react";
import { View, Text, Modal, Button, Image, ScrollView } from "react-native";
import { styles } from "./styles";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.boxLightBlue}>
                    <Text style={styles.text}>Hello Hamido</Text>
                    <Button title="Press" onPress={() => setIsModalVisible(true)} />
                    <Image
                        source={{ uri: "https://picsum.photos/300" }}
                        style={{ width: 200, height: 200 }}
                        defaultSource={logoImg}
                    />
                    <Text>
                        Le Lorem Ipsum est simplement du faux texte employé dans la
                        composition et la mise en page avant impression. Le Lorem Ipsum est le
                        faux texte standard de l'imprimerie depuis les années 1500, quand un
                        imprimeur anonyme assembla ensemble des morceaux de texte pour
                        réaliser un livre spécimen de polices de texte. Il n'a pas fait que
                        survivre cinq siècles, mais s'est aussi adapté à la bureautique
                        informatique, sans que son contenu n'en soit modifié. Il a été
                        popularisé dans les années 1960 grâce à la vente de feuilles Letraset
                        contenant des passages du Lorem Ipsum, et, plus récemment, par son
                        inclusion dans des applications de mise en page de texte, comme Aldus
                        PageMaker.
                    </Text>
                </View>
            </ScrollView>

            {/* Modal */}
            <Modal
                visible={isModalVisible}
                transparent={true}
                onRequestClose={() => setIsModalVisible(false)}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <View style={styles.contentModal}>
                    <Text>Content modal</Text>
                    <Button
                        title="Close"
                        onPress={() => setIsModalVisible(false)}
                        accessibilityLabel="Close modal"
                    />
                    <Image source={logoImg} style={{ width: 200, height: 200 }} />
                </View>
            </Modal>
        </View>
    );
}
