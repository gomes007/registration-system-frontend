import axios from "axios";
import { BASE_API_URL, BASE_WEBSOCKET_URL } from "../common/constants";
import { authHeader } from "./base.service";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

const API_URL = BASE_API_URL + "/api/sale";

const saveSale = (sale) => {
  return axios.post(API_URL, sale);
};

const deleteSale = (sale) => {
  return axios.delete(API_URL + "/" + sale.id);
};

const getAllSale = () => {
  const baseHeaders = authHeader();

  return axios.get(API_URL, { headers: baseHeaders });
};

const getAllSalesWebSocket = (callback) => {
  const socket = new SockJS(`${BASE_WEBSOCKET_URL}/sales`, null, {
    server: "sales-backend",
  });
  const client = Stomp.over(socket);
  client.debug = () => {};
  client.connect(
    {
      "heart-beat": { incoming: 1000, outgoing: 1000 }
    },
    (_frame) => {
      client.subscribe("/topic/sales", (data) => {
        callback(JSON.parse(data.body));
      });
      client.send("/app/sales");
    },
    (error) => console.error(error)
  );
};

export { saveSale, deleteSale, getAllSale, getAllSalesWebSocket };
