import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts/highstock"
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { addToOptions } from "../../../redux/chart"
export default function HighchartComp() {

    const [loading, setLoading] = useState(true)

    const options = useSelector((state) => state.chart.chartOptions)
    const fetchTickers = () => {
        fetch("https://stockdata.test.quantfolio.dev/ticker")
        .then(response => response.json())
        .then(data => console.log(data.tickers))
    }

/*     const defaultoptions = {
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }]
    } */

    return (
        <HighchartsReact
        options={options}
        highcharts={Highcharts}
        constructorType={'stockChart'}
        />
    )
}