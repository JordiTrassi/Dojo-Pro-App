import React from 'react';
import { useSelector } from 'react-redux';
import {
  Image,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';
import { Transitioning, Transition } from 'react-native-reanimated';
import styles from './AssistanceSwiperStudents_styles';

const { width } = Dimensions.get('window');

export default function AssistanceSwiper() {
  const data = useSelector((store) => store.user.students);

  const stackSize = 4;
  const colors = {
    red: '#ff0000',
    blue: '#0070FF',
    gray: '#777777',
    white: '#ffffff',
    black: '#000000',
    green: '#00cc00',

  };
  const ANIMATION_DURATION = 200;

  const transition = (
    <Transition.Sequence>
      <Transition.Out
        type="slide-bottom"
        durationMs={ANIMATION_DURATION}
        interpolation="easeIn"
      />
      <Transition.Together>
        <Transition.In
          type="fade"
          durationMs={ANIMATION_DURATION}
          delayMs={ANIMATION_DURATION / 2}
        />
        <Transition.In
          type="slide-bottom"
          durationMs={ANIMATION_DURATION}
          delayMs={ANIMATION_DURATION / 2}
          interpolation="easeOut"
        />
      </Transition.Together>
    </Transition.Sequence>
  );

  const swiperRef = React.createRef();
  const transitionRef = React.createRef();

  const CardDetails = ({ index }) => (
    <View key={data[index].id} style={{ alignItems: 'center' }}>
      <Text style={[styles.cardText, styles.heading]} numberOfLines={2}>
        {data[index].name}
        {' '}
        {data[index].surname}
      </Text>
    </View>
  );

  const Card = ({ card }) => (
    <View style={styles.card}>
      <Image source={{ uri: `${data[index].photo}` }} style={styles.cardImage} />
    </View>
  );

  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        name="crop-square"
        size={width}
        color={colors.blue}
        style={{
          opacity: 0.05,
          transform: [{ rotate: '45deg' }, { scale: 1.6 }],
          position: 'absolute',
          left: -15,
          top: 30,
        }}
      />
      <StatusBar hidden />
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={data}
          cardIndex={index}
          renderCard={(card) => <Card card={card} />}
          infinite
          backgroundColor="transparent"
          onSwiped={onSwiped}
          onTapCard={() => swiperRef.current.swipeLeft()}
          cardVerticalMargin={50}
          stackSize={stackSize}
          stackScale={10}
          stackSeparation={14}
          animateOverlayLabelsOpacity
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
          overlayLabels={{
            left: {
              title: 'NOT ATTEND',
              style: {
                label: {
                  backgroundColor: colors.red,
                  borderColor: colors.red,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: 'ASSIST',
              style: {
                label: {
                  backgroundColor: colors.green,
                  borderColor: colors.green,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Transitioning.View
          ref={transitionRef}
          transition={transition}
          style={styles.bottomContainerMeta}
        >
          <CardDetails index={index} />
        </Transitioning.View>
        <View style={styles.bottomContainerButtons}>
          <TouchableOpacity
            name="close"
            size={94}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color={colors.red}
            onPress={() => swiperRef.current.swipeLeft()}
          />
          <TouchableOpacity
            name="circle-outline"
            size={94}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color={colors.blue}
            onPress={() => swiperRef.current.swipeRight()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// AssistanceSwiper.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired,
//   }).isRequired,
// };
