import axios from 'axios';

const Vote = {
  delete: () => {
    axios.delete('http://4d23f078.ngrok.io/votes');
  }
};

export default Vote;
