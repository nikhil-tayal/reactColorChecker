import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  Button
} from "react-native";
var width = Dimensions.get("window").width;

export default class App extends Component {
  state = {
    colorHEXCode: "",
    colorArray: [],
    i: 0
  };
  onPress = () => {
    this.state.colorArray.push(this.state.colorHEXCode);
    this.setState({ i: this.state.i + 1 });
    this._textInput.setNativeProps({ text: "" });
    // var validateString= this.state.colorHEXCode.split('');
    // for( var i= 0 ; i<validateString.length ; i++) {
    // console.log(validateString[i]);
    //   if(this.validateString[i]== 1 || 2 || 3 || 4 || 5 || 6|| 7|| 8||9 || "a" || "b" || "c"|| "d" || "e" || "f" || "A" || "B" || "C" || "D"|| "E"|| "F"){
    //     this.state.colorArray.push(this.state.colorHEXCode);
    //     this.setState({ i: this.state.i + 1 });
    //     this._textInput.setNativeProps({ text: "" });
    //   }
    //   else{
    //     alert("enter a valid number")
    //   }
    // }
  };

  render() {
    colors = this.state.colorArray.map((colValue, index) => {
      var finalValue = colValue.trim();
      console.log(finalValue);
      return (
        <View
          key={index}
          style={[styles.colorDiv, { backgroundColor: `#${finalValue}` }]}
        />
      );
    });
    return (
      <View style={styles.container}>
        <ScrollView vertival={true}>{colors}</ScrollView>
        <View
          style={{
            elevation: 3,
            borderTopWidth: 0.1,
            borderTopColor: "#bababa"
          }}
        >
          <TextInput
            style={styles.textInputStyle}
            placeholder="E.G. E7E7E7"
            returnKeyLabel={"next"}
            onChangeText={text => this.setState({ colorHEXCode: text })}
            ref={component => (this._textInput = component)}
            maxLength={6}
            autoCapitalize={"characters"}
          />
          <Button
            onPress={this.onPress}
            title="Enter Color to Display In HEX "
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  colorDiv: {
    height: 80,
    width: width - 20,
    backgroundColor: "red",
    margin: 10
  },
  colordiv: {
    height: 80,
    width: width,
    backgroundColor: "green"
  }
});
