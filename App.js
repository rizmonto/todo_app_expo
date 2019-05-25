//import stuff
import React from 'react'; // found in node_modules
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

//create stuff
class App extends React.Component{
  state = {
    text: "",
    todo: []
  }

  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""}); // can set states of 2 variables at once.
    //this.setState({todo: this.state.text})
  }

  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({todo: arr});
  }
  
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return(
        //<TouchableOpacity>
          <Text
            key={t}
            style = {styles.todoStyle}
            onPress = {()=>{this.deleteTodo(t)}} // calls the function with a parameter
          >{t}</Text> // print out the value inside t
        //</TouchableOpacity>
      ) 
    }) //maps over item in the array
  }

  render(){
    return(
      <View style = {styles.wholeStyle}>
        <View style = {styles.viewStyle}>
          <Text style = {styles.header}>Notes App</Text>
          <TextInput
            style = {styles.inputStyle}
            onChangeText = {(text) => this.setState({text})}
            value = {this.state.text} // the actual value inside TextInput
          />
          <Button
            title = "Add Todo"
            //color = "white"
            onPress = {this.addTodo}
          />
           <View style = {{marginTop: 100}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {

  wholeStyle: {
    flex: 1,
    backgroundColor: "#0288D1"
  },

  todoStyle: {
    fontSize: 24,
    color: 'white'
  },

  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },

  inputStyle: {
    height: 40,
    borderColor: "white",
    margin: 10,
    borderWidth: 1
  },
  
  header:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }
}

//export stuff
export default App;