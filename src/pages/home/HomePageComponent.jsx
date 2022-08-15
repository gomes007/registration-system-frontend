import {useEffect, useState} from "react";
import {getAllSale} from "../../services/SaleService";
import SalesGraph from "./SalesGraph";

export default function HomePageComponent(props) {

    const [list, setList] = useState([]);

    // useEffect(() => {
    //     setInterval(()=> {
    //         getAllSale().then(res => {
    //             setList(res.data)
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    //     },5000)
    //
    // }, [])


    useEffect(() => {

        getAllSale().then(res => {
            setList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    return (
        <div className="content">

            <SalesGraph data={list}/>

        </div>
    )
}
