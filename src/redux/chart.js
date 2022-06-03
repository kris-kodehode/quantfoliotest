export function addToOptions(e) {
    return {
        type: "UPDATE_DATA",
        payload: e
    }
}

const initialState = {
    chartOptions: {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'loading',
            data: [1, 0, 4]
        }]
    }
}

export default function chartReducer(state = initialState, action) {
    switch(action.type) {
        case("UPDATE_DATA"):
            return {
                ...state.chartOptions
            }
        default:
            return state

    }
}