import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts/highstock"
import { useSelector } from "react-redux"

export default function HighchartComp(className) {
    const options = useSelector((state) => state.chart.chartOptions)

    return (
        <HighchartsReact
        options={options}
        highcharts={Highcharts}
        constructorType={'stockChart'}
        />
    )
}