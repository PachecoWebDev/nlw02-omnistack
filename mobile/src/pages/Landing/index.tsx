import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';


import styles from './styles';

import studyIcon from '../../assets/images/icons/study.png';
import giveClasesIcon from '../../assets/images/icons/give-classes.png';
import landingImg from '../../assets/images/landing.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }
  return  (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner}/>

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          onPress={handleNavigateToStudyPages} 
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClassesPage} 
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClasesIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de { totalConnections } conexões realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;