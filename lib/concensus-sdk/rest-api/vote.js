import axios from 'axios';

class Vote {
  delete () {
    axios.delete('http://4d23f078.ngrok.io/votes');
  }
}

export default Vote;
