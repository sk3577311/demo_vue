import axios from "axios";

export class UserService {
  static users = [];

  static getallusers() {
    let dataURL = 'https://jsonplaceholder.typicode.com/users';
    return axios.get(dataURL);
  }
  static getUser(userID){
    let dataurl = `https://jsonplaceholder.typicode.com/users/${userID}`;
    return axios.get(dataurl);
  }
}
