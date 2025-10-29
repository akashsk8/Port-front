import axios from "axios";
const Api_Url = "https://port-back-chi.vercel.app/C";
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
