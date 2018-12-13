import axios from 'axios';

export const ENTRIES = 'ENTRIES'; // all entries
export const ENTRY = 'ENTRY'; // one entry
export const CREATE_ENTRY = 'CREATE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';

const token = localStorage.getItem('id');
axios.defaults.headers.common.Authorization = `bearer ${token}`;

const HOST = 'http://localhost:5000';

export function allEntries() {
  return dispatch => {
    axios
      .get(`${HOST}/api/my_entries`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then(res => {
        console.log(res);
        dispatch({ type: 'ENTRIES', payload: res.data });
      })
      .catch(err => {
        console.log('error', err);
      });
  };
}

export function oneEntry(id) {
  return dispatch => {
    axios
      .get(`${HOST}/api/entry/${id}`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then(res => {
        console.log(res);
        dispatch({ type: 'ENTRY', payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
