import axios from 'axios';

const Poll = {
  create: () => {
    axios.post('http://4d23f078.ngrok.io/createPoll');
  }
};

export default Poll;
