export function addSeriesData(name, data) {
    return {
        type: "ADD_SERIES_DATA",
        payload: {
            name: name,
            data: data,
            dataGrouping: [
                [
                  "week",
                  [1],
                ],
                ["month", [1, 2, 3, 4, 6]]
              ]
        }
    }
}

export function addVolumeData(name, data) {
    return {
        type: "ADD_VOLUME_DATA",
        payload: {
            name: name + "volume",
            data: data,
            linkedTo: ":previous",
            yAxis: 1,
            type: "column",
            dataGrouping: [
                [
                  "week",
                  [1],
                ],
                ["month", [1, 2, 3, 4, 6]]
              ]
        }
    }
}

export function isLoading(boolean) {
    return {
        type: "IS_LOADING",
        payload: boolean
    }
}

export function saveJson(tickers, data) {
    return {
        type: "UPDATE_API",
        payload: {
            tickers: tickers,
            data: data
        }
    }
}

const initialState = {
    isLoading: true,
    API: {
        tickers: null,
        data: null
    },
    chartOptions: {
        title: {
            text: 'OHCL Chart'
        },
        rangeSelector: {
            selected: 0,
            buttons: [{
                type: 'year',
                count: 1,
                text: '1y',
            },
            {
                type: 'year',
                count: 5,
                text: '5y'
            },
            {
                type: 'all',
                text: 'All'
            }]
        },
        yAxis: [
            {
              type: "datetime",
              labels: {
                align: "right",
                x: -3,
              },
              title: {
                text: "OHLC",
              },
              height: "60%",
              lineWidth: 2,
              resize: {
                enabled: true,
              },
            },
            {
              labels: {
                align: "right",
                x: -3,
              },
              title: {
                text: "Volume",
              },
              top: "65%",
              height: "35%",
              offset: 0,
              lineWidth: 2,
            },
        ],
        chart: {
            type: 'ohlc',
            styledMode: true
        },
        legend: {
            enabled: true,
        },
        tooltip: {
            split: false,
            crosshairs: false,
            shared: true
        },
        plotOptions: {
            series: {
                showInNavigator: true,
                findNearestPointBy: 'xy'
            }
        },
        series: []
    }
}

export default function chartReducer(state = initialState, action) {
    switch(action.type) {

        case("UPDATE_API"):
            return {
                ...state,
                API: action.payload
            }

        case("IS_LOADING"):
            return {
                ...state,
                isLoading: action.payload
            }

        case("ADD_SERIES_DATA"):
            return {
                ...state,
                chartOptions: {
                    ...state.chartOptions,
                    series: [
                        ...state.chartOptions.series,
                        action.payload
                    ]
                }
            }

        case("ADD_VOLUME_DATA"):
            return {
                ...state,
                chartOptions: {
                    ...state.chartOptions,
                    series: [
                        ...state.chartOptions.series,
                        action.payload
                    ]
                }
            }
        default:
            return state

    }
}