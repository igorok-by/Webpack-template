import create from '../utils/create';
import * as constants from '../utils/constants';
import * as workers from '../utils/workers';


export default class WeatherApp {
  constructor() {
    this.url = null;
  }

  async getDataFromAPI(url) {
    this.url = url;

    try {
      const res = await fetch(this.url);
      const data = await res.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
