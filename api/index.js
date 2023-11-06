class Api {
  constructor(baseUrl, localUrl) {
    this.baseUrl = baseUrl;
    this.localUrl = localUrl;
  }

  async registration(body) {
    try {
      const response = await fetch(`${this.baseUrl}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else throw new Error("Faild to post!");
    } catch (error) {
      console.log("API error:", error);
    }
  }

  async getService(name) {
    try {
      const response = await fetch(`${this.localUrl}`);
      if (response.ok) {
        const data = await response.json();
        const service = data.find(
          (service) => service.name.toLowerCase() === name
        );
        return service;
      } else throw new Error("Faild to fetch!");
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Api(
  "https://jsonplaceholder.typicode.com/posts",
  "../../data/services.json"
);
