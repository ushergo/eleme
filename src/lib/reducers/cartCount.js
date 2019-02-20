export default function (state, action) {
    state = state || {
        count: 0
    };

    let new_state
    switch (action.type) {
        case "ADD":
            let count = state.count + action.count
            new_state = Object.assign({}, state, {count: count})
            return new_state
        case "REDUCE":
            count = state.count - action.count
            if (count < 0)
                count = 0
            new_state = Object.assign({}, state, {count: count})
            return new_state
        default:
            return state
    }


}