import React, { PropsWithChildren, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import One from './assets/images/1_on_dice.png';
import Two from './assets/images/2_on_dice.png';
import Three from './assets/images/3_on_dice.png';
import Four from './assets/images/4_on_dice.png';
import Five from './assets/images/5_on_dice.png';
import Six from './assets/images/6_on_dice.png';

type DiceProps = PropsWithChildren<{
  imageURL: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageURL }: DiceProps) => {
  return (
    <View>
      <Image style={styles.image} source={imageURL} />
    </View>
  );
};

const App = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(One);

  const diceRoller = () => {
    let randomNuber = Math.floor(Math.random() * 6) + 1;

    switch (randomNuber) {
      case 1:
        setDiceImage(One);
        break;

      case 2:
        setDiceImage(Two);
        break;

      case 3:
        setDiceImage(Three);
        break;

      case 4:
        setDiceImage(Four);
        break;

      case 5:
        setDiceImage(Five);
        break;

      case 6:
        setDiceImage(Six);
        break;

      default:
        break;
    }
    ReactNativeHapticFeedback.trigger('impactHeavy', options);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Alhamdulillah</Text>
      <View style={styles.imageContainer}>
        <Dice imageURL={diceImage} />
      </View>
      <Pressable onPress={diceRoller} style={styles.buttonTextContainer}>
        <View>
          <Text style={styles.buttonText}>Roll Dice</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeading: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 700,
    fontSize: 36,
    marginTop: 20,
  },
  image: {
    height: 100,
    width: 100,
    margin: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 700,
    fontSize: 20,
    padding: 2,
    backgroundColor: 'green',
    height: 60,
    width: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
  },
  buttonTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
