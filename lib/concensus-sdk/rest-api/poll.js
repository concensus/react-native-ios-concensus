import axios from 'axios';

class Poll {
  create() {
    axios.post('http://4d23f078.ngrok.io/createPoll');
  }
}

export default Poll;
