import {  
  action, 
  // computed, 
  extendObservable } from 'mobx'

import fetch from 'node-fetch'

const accessKey='b9fcf213eae545413fcebe36691d8845'

class InputObservables {
  constructor(){
    extendObservable(this, {
      value: '',
      length: 0,

      setValue: action( e=> {
        // console.log('fired', e.target.value)
        // console.log(e.target.value.length)
        this.length = e.target.value.length
        this.value = e.target.value
      }),
      signUp: action( a=> {
        console.log('sign up clicked!')

        // async function
        async function fetchAsync (value) {
          // await response of fetch call
          let response = await fetch(`http://apilayer.net/api/validate?access_key=${accessKey}&number=${value}&country_code=US`)
          // only proceed once promise is resolved
          let data = await response.json();
          // only proceed once second promise is resolved
          return data;
        }

        fetchAsync(this.value)
          .then(data => console.log(data))
          .catch(reason => console.log(reason.message))

        window.emailjs.send('gmail','clicknclean', {email: `${this.value}@tmomail.net`})

      }),

    })
  }
}
export default InputObservables