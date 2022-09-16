import {Chart} from "react-google-charts";


export default function SalesByDayGraph({data}) {

    const options = {
        chart: {title: 'Sales'},
        hAxis: {title: 'Date'},
        VAxis: {title: 'Total'},
        colors: ['blue']
    }


    return (

        <Chart
            chartType="Line"
            data={[['date', 'total'], ...data.map(item => [item.saleDate, item.total])]}
            width="100%"
            height="400px"
            legendToggle
            options={options}
        />
    )
}