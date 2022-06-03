import * as s from "./mainPage/MainPageStyles"
import HighchartComp from "./mainPage/components/Highchart"

export default function MainPage() {
    return (
        <s.ChartContainer>
            <HighchartComp/>
        </s.ChartContainer>
    )
}