class StoreService {
  getStore() {
    return {
      id: 1,
      name: "Fake Store 1",
    };
  }
}

const storeService = new StoreService();

module.exports = { storeService };
