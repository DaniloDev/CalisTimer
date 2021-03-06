import React, { Component }  from 'react';
import { Keyboard, View, Text, StyleSheet, Image,TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, TouchableHighlightBase } from 'react-native';
import Select from '../components/Select'
import Title from '../components/Title'
import Time from '../components/Time'
import ProgressBar from '../components/ProgressBar'
import BackgroundProgress from '../components/BackgroundProgress'
import Sound from 'react-native-sound'

//const alert = require('../../assets/sounds/alert.wav')
const alert = require('alert.wav')

class EMOMScreen extends Component {
  state = {
    keyboardIsVisible: false,

    alerts: [0, 15],
    countdown: 1,
    time:'2',

    isRunning: false,
    countdownValue: 5,
    count: 0
  }
  componentDidMount(){
    Sound.setCategory('Playback', true)
    this.alert = new Sound(alert)

    this.kbShow = Keyboard.addListener('keyboardDidShow', () => {
        this.setState({ keyboardIsVisible: true })
    })

    this.kbHide = Keyboard.addListener('keyboardDidHide', () => {
        this.setState({ keyboardIsVisible: false })
    })
    //this.play()
  }
  componentWillUnmount(){
    this.kbShow.remove()
    this.kbHide.remove()
  }
  playAlert = () => {
      const resto = this.state.count % 60
      if(this.state.alerts.indexOf(resto)>= 0){
        this.alert.play()
      }
      if(this.state.countdown === 1){
           if(resto>=55 && resto<60){
             this.alert.play()
           } 
      }
  }
  play = () => {
      this.setState({ isRunning: true })
      const count = () => {
          this.setState({ count: this.state.count + 1 }, () => {
            this.playAlert()
            if(this.state.count === parseInt(this.state.time)*60){
              clearInterval(this.countTimer)
            }
          })
  }
      // checar countdown
      if(this.state.countdown === 1){
        this.alert.play()
        this.countdownTimer = setInterval(()=>{
        this.alert.play() 
        this.setState({ countdownValue: this.state.countdownValue - 1 }, () => {
          if(this.state.countdownValue === 0){
            clearInterval(this.countdownTimer)
            this.countTimer = setInterval(count, 1000)
          }
          })
        }, 1000)
      }else{
          this.countTimer = setInterval(count, 1000)
      }
      // come??ar contar
      // checar termino
      //if()
  }
  render(){
    if(this.state.isRunning){
        const percMinute = parseInt(((this.state.count % 60)/60)*100)
        const percTime   = parseInt(((this.state.count/60) / parseInt(this.state.time))*100)
        return(
            <BackgroundProgress percentage={percMinute}>
              <View style={{ flex: 1, justifyContent: 'center'}}>
                  <Text style={{ color : 'white'}}>Countdown: {this.state.countdownValue}</Text>
                  <Text style={{ color : 'white'}}>Count: {this.state.count}</Text>
                  <Time time={this.state.count}/>
                  <ProgressBar percentage={percTime}  />
                  <Time time={parseInt(this.state.time)*60-this.state.count} type='text2' appendedText={' restantes'}/>
                  <Text style={{ color : 'white'}}>Minute: {percMinute}</Text>
                  <Text style={{ color : 'white'}}>Time: {percTime}</Text>
              </View>
            </BackgroundProgress>
        )
    }
    return(
      <KeyboardAvoidingView style={{ flex: 1}} behavior='padding'>
        <ScrollView style={styles.container}>
          <Title title='EMOM' subTitle='Every Minute On the Minute' style={{ paddingTop: this.state.keyboardIsVisible ? 20 : 200}}/>
          <Image style={{ alignSelf: 'center', marginBottom: 17} } source={require('../../assets/imgs/settings-cog.png')}/>
          <Select
              label='Alertas:'
              current={this.state.alerts} 
              options={[
              
              {
                id: 0, 
                label:'0s'
              }, 
              {
                id: 15, 
                label:'15s'
              }, 
              {
                  id: 30, 
                  label:'30s'
              },
              {
                  id: 45, 
                  label: '45s'
              }
            ]}
            onSelect={ opt => this.setState({ alerts: opt })}
          />
          <Select
              label='Contagem regressiva:'
              current={this.state.countdown}
              options={[{ id: 1, label: 'sim' },{ id: 0, label: 'n??o'}]}
              onSelect={ opt => this.setState({ countdown: opt })}
          />
          <Text style={styles.label}>Quantos minutos:</Text>
          <TextInput style={styles.input} value={this.state.time} keyboardType='numeric' onChangeText={ text => this.setState({ time: text})}/>
          <Text style={styles.label}z>minutos</Text>
          <TouchableOpacity style={{ alignSelf: 'center'}} onPress={this.play}>
             <Image source={require('../../assets/imgs/btn-play.png')}/>
          </TouchableOpacity>
          <Text>Testar</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default EMOMScreen

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      backgroundColor: '#15122B',
  },
   label: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24
  },
  input: {
    textAlign: 'center',
    color: '#EFCC13',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 48
  }
})