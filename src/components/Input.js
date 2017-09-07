import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
const style = {
  borderRadius: 0
}
class InputForm extends Component {
  handleChange(e) {
    return this.props.change(e)
  }
  handleClick() {
    return this.props.sign()
  }  
  render(){
    return(
      <div>
        <Input
          style={style}
          id='input'
          icon='phone'
          iconPosition='left'
          placeholder='Enter phone number'
          focus={true}
          action={{content: 'Sign up', color:'teal', onClick: ()=> this.handleClick()}}
          size='big'
          type='number'
          onChange={(e)=> this.handleChange(e)}
          max='10'
                                                                             
        />
      </div>
    )
  }
}
export default InputForm