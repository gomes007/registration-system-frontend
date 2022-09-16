import {useEffect, useState} from "react";
import {getAllSale, getAllSalesWebSocket} from "../../services/SaleService";
import SalesByDayGraph from "./SalesByDayGraph";
import SalesGraph from "./SalesGraph";

export default function HomePageComponent(props) {

    const [list, setList] = useState([]);

    useEffect(() => {
        getAllSalesWebSocket(setList);
    }, []);

    return (
        <div className="container content">
            <SalesGraph data={list}/>
            <SalesByDayGraph data={list} />
        </div>
    )
}
