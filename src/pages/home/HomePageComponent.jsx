import {useEffect, useState} from "react";
import {getAllSale, getAllSalesWebSocket} from "../../services/SaleService";
import SalesByDayGraph from "./SalesByDayGraph";
import SalesGraph from "./SalesGraph";

export default function HomePageComponent(props) {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        getAllSalesWebSocket(setList);
    }, []);

    useEffect(() => {
        setTotal(list.length);
        const salesSubstract = list.reduce(
            (p, c) => {
                return p + c.total;
            },
            0
        ).toFixed(2);
        setTotalValue(salesSubstract);
    }, [list]);

    return (
        <div className="container content">
            {/* <SalesGraph data={list}/> */}
            <SalesByDayGraph data={list} />
            <div className="sales-total">
                <p>Total de vendas:</p>
                <p>{total}</p>
            </div>

            <div className="sales-total">
                <p>Valor total de vendas:</p>
                <p>R$ {totalValue}</p>
            </div>
        </div>
    )
}
