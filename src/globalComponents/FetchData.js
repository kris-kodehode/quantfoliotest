import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addSeriesData, addVolumeData, saveJson } from "../redux/chart"

const FetchData = () => {
    const dispatch = useDispatch()

    const getTickers = async () => {
        let response = await fetch("https://stockdata.test.quantfolio.dev/ticker")
        response = await response.json()
        getTickerData(response.tickers)
    }

    const getTickerData = async (tickers) => {
        let tickerData = []
        for(const ticker of tickers) {
            let response = await fetch(`https://stockdata.test.quantfolio.dev/ticker/${ticker}`)
            response = await response.json()
            tickerData.push(response)
            formatData(response.meta.symbol ,response.values)
        }
        dispatch(saveJson(tickers, tickerData))
    }

    function formatData(symbol, data) {
        let name = symbol
        let ohlc = []
        let volume = []
        data.reverse()
        for (let value of data) {
          ohlc.push([
            new Date(value.datetime).getTime(),
            parseFloat(value.open),
            parseFloat(value.high),
            parseFloat(value.low),
            parseFloat(value.close)
          ])
          
          volume.push([
            new Date(value.datetime).getTime(),
            parseFloat(value.volume)
          ])
        }
        dispatch(addSeriesData(name, ohlc))
        dispatch(addVolumeData(name, volume))
      }

    useEffect(() => {
        getTickers()
    },[])
}




/* const formatData = (input) => {
        let data = []
        let volume = []

        input.forEach(e => {
            data.push([
                parseFloat(new Date(e.datetime).getDate()),
                parseFloat(e.open),
                parseFloat(e.high),
                parseFloat(e.low),
                parseFloat(e.close)
            ])
            volume.push([
                parseFloat(new Date(e.datetime).getDate()),
                parseFloat(e.volume)
            ])
        })
        return {
            data: data,
            volume:volume
        }
    } */



export default FetchData