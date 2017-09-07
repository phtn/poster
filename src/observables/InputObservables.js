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

      smsGateway: [
        'sms.alltelwireless.com',
        'txt.att.net',
        'sms.myboostmobile.com',
        'cingularme.com',
        'mymetropcs.com',
        'messaging.nextel.com',
        'messaging.sprintpcs.com',
        'T-Mobile USA Inc. = tmomail.net',
        'email.uscc.net',
        'vtext.com',
        'vmobl.com'
      ],

      carrier: '',
      setValue: action( e=> {
        // console.log('fired', e.target.value)
        // console.log(e.target.value.length)
        this.length = e.target.value.length
        this.value = e.target.value
      }),

      signUp: action( a=> {
        console.log('sign up clicked!')

        // async function
        async function fetchAsync (value, index) {
          // await response of fetch call
          let response = await fetch(`http://apilayer.net/api/validate?access_key=${accessKey}&number=${value}&country_code=US`)
          // only proceed once promise is resolved
          let data = await response.json();
          // only proceed once second promise is resolved
          return data;
        }

        fetchAsync(this.value, this.smsGateway)
          .then(data => {
            if (data.valid && data.line_type === 'mobile'){
              console.log(`Valid Number: ${data.valid}`)
              console.log(`Line Type: ${data.line_type}`)
              console.log(`Carrier: ${data.carrier}`)
              
              switch(data.carrier){
                case 'T-Mobile USA Inc.': 
                  window.emailjs.send('gmail','clicknclean', {email: `${this.value}@tmomail.net`})
                  break
                default:
                  return null
              }
              // window.emailjs.send('gmail','clicknclean', {email: `${this.value}@tmomail.net`})
            }
          })
          .catch(reason => console.log(reason.message))

        

      }),

    })
  }
}
export default InputObservables