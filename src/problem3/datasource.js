import axios from "axios";

class Datasource {
  constructor() {
    this.src = "https://static.ngnrs.io/test/prices";
  }

  async getPrices() {
    try {
      const { data } = await axios.get(this.src);
      let prices = data.data.prices.map((price) => ({
        ...price,
        mid: () =>
          !isNaN(price.buy) && !isNaN(price.sell)
            ? (price.buy + price.sell) / 2
            : 0,
        quote: () => price.pair.length > 3 && price.pair.slice(-3),
      }));
      return prices;
    } catch (e) {
      throw e;
    }
  }
}

export default Datasource;
