import React, { Component } from 'react';
import { observer } from 'mobx-react'
import 'semantic-ui-css/semantic.min.css'
import Input from './components/Input'
import InputObservables from './observables/InputObservables'
import Pizza from './pizza.jpg'

const inputStore = new InputObservables()




const container = {
  backgroundColor: 'tomato',
  backgroundImage: `url(${Pizza})`,
  height: window.innerHeight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const app = observer ( class App extends Component {
  componentDidMount(){
    
  }
  render(){
    return(
      <div style={container}>
        <Input 
          change={inputStore.setValue}
          sign={inputStore.signUp}  
        />
      </div>
    )
  }
})
export default app;
