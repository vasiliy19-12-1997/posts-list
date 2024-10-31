import axios from "axios";
export class PostService {
  static async getAll(_limit, _page) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit,
          _page,
        },
      }
    );
    return response;
  }
  static async getById(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return response;
  }
  static async getCommentsById(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + `${id}/comments`
    );
    return response;
  }
}
