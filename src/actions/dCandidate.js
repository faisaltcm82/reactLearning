import api from "./api";

export const ACTION_TYPE = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE ',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchall = () => dispatch => {
    api.dCandidate().fetchall()
        .then(response => {
            dispatch({
                type: ACTION_TYPE.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}