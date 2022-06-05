import { useSelector } from "react-redux"
import HighchartComp from "./mainPage/components/Highchart"
import * as s from "./mainPage/MainPageStyles"


export default function MainPage() {
    const checker = useSelector((state) => state.chart.chartOptions.series)

    return (
        <s.ChartContainer>
            {checker.length >= 8 ? <HighchartComp/> : <p className="loading">loading</p>}
        </s.ChartContainer>
    )
}