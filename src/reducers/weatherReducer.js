const initialState = {
    background: '#fff',
    address: '',
    geocodeResults: null,
    loading: false,
}

export default function weatherReport(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_BACKGROUND':
            return Object.assign({}, state, { background: action.color });
        case 'SET_INITIAL_STATE':
            return initialState;
        case 'RENDER_GEO_CODE_ACCESS':
            return Object.assign({}, state, { geocodeResults: action.weather });
        default:
            return state;
    }
}