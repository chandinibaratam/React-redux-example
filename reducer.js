import axios from 'axios';

export const GET_REPOS = 'LOAD';
export const GET_REPOS_SUCCESS = 'LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'LOAD_FAIL';

export default function reducer(state = { repos: [] }, action) { // setting the initial state
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data.feed.entry };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}

export function listRepos(user) {
    return function(dispatch) {
        dispatch({type: GET_REPOS});
        axios.get(`https://itunes.apple.com/us/rss/topmovies/limit=25/json`)
        .then(response => {
            console.log(response);
            dispatch({
                type: GET_REPOS_SUCCESS,
                payload: response
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({type: GET_REPOS_FAIL});
        })
    }
}
