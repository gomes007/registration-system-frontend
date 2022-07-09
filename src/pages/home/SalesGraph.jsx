import {Chart} from "react-google-charts";


export default function SalesGraph({data}) {

    const options = {
        chart: {title: 'Sales'},
        hAxis: {title: 'Description'},
        VAxis: {title: 'Quantity'},
        colors: ['blue']
    }


    return (

        <Chart
            chartType="Bar"
            data={[['description', 'quantity'], ...data.map(item => [item.description, item.quantity])]}
            width="100%"
            height="400px"
            legendToggle
            options={options}
        />
    )
}