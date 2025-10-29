import axios from "axios";
const Api_Url = "http://10.131.108.196:5000/Python";
async function fetchData() {
    try {
      const response = await axios.get(Api_Url);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  const dataPromise = fetchData();

  export default dataPromise;