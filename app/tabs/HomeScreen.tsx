import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const HomeScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [recording, setRecording] = useState(false);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const startRecording = async () => {
    if (cameraRef.current) {
      setRecording(true);
      const video = await cameraRef.current.recordAsync();
      setRecording(false);
      const asset = await MediaLibrary.createAssetAsync(video.uri);
      console.log('Video recorded:', asset.uri);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={CameraType.back} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button title={recording ? 'Recording...' : 'Start Recording'} onPress={startRecording} disabled={recording} />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
});

export default HomeScreen;
