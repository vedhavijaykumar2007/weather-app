import React,{Component}from "react"
import { StyleSheet, Text, View ,Image} from 'react-native';

export default class WeatherScreen extends Component() {
  constructor(){
    super()
    this.state={
      weather:""
    }
  }
getWeather=async()=>{
  var url=""
  return fetch(url)
  .then(response=>response.json())
  .then(responseJson=>{
    this.setState({
      weather:responseJson
    })
  })

  .catch(error=>{
    console.error(error)
  })
}
componentDidMount(){
  this.getWeather()
}

render(){
  if(this.state.weather===""){
    return(
      <View style={styles.container}>
        <Text>loading...</Text>
      </View>
    )
  }

  else{
    return(
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>
            weather forecast
          </Text>
          <View style ={styles.textContainer}>
            <Text style={{fontSize:18}}>
              {this.state.weather.main.temp}&deg:C
            </Text>
            <Text style ={{fontSize:20,margin:10}}>
              humidity:{this.state.weather.main.humidity}
            </Text>
            <Text style={{fontSize:20}}>
              {this.state.weather.weather[0].description}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
