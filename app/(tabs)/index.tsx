import Button from '@/components/Button';
import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }
  }

  const onReset = async () => {
    setShowAppOptions(false);
  };

  const onAddEmoji = async () => {

  };

  const onSave = async () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}> 
        <ImageViewer defaultImage={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset}/>
            <CircleButton onPress={onAddEmoji}/>
            <IconButton icon="save-alt" label="Save" onPress={onSave}/>
          </View>
        </View>
      ) : (
      <View style={styles.footerContainer}>
        <Button label='Choose photo' theme='primary' onPress={pickImageAsync}/>
        <Button label='Use photo' onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#E4CC37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 2 / 3,
    padding: 28,
    maxWidth: 320,
    width: '100%',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  optionsContainer: {
    flex: 1 / 3,
    paddingTop: 2,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
