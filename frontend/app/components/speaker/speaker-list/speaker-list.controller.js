/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <speaker-list> component
 */

class SpeakerListController {
  constructor () {
    this.message = 'Hi ngErs!'
  }

  sayHello ({ speakerName }) {
    window.alert(`Hello ${speakerName}!`)
    Materialize.toast('I am a toast!', 4000)
  }
}

export default SpeakerListController
