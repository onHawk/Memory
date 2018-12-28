import axios from 'axios';

export const ENTRIES = 'ENTRIES'; // all entries
export const ENTRY = 'ENTRY'; // one entry
export const CREATE_ENTRY = 'CREATE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';

axios.defaults.headers.common.Authorization = `bearer ${localStorage.getItem(
  'id'
)}`;

export function allEntries() {
  return dispatch => {
    axios
      .get(`/api/my_entries`, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        // console.log(res);
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
      .get(`/api/entry/${id}`, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
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
export function createEntry(entry, history) {
  return dispatch => {
    axios
      .post(`/api/create_page`, entry, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        console.log(res.data);

        dispatch({ type: 'CREATE_ENTRY', payload: res.data });
        history.push('/home');
      })
      .catch(err => {
        console.log(err.response);
      });
  };
}

export function deleteEntry(id, history) {
  return dispatch => {
    axios
      .delete(`/api/delete_entry/${id}`, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        console.log(res.data);

        dispatch({ type: 'DELTE_ENTRY', payload: res.data });
        history.push('/home');
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function editEntry(entry, history) {
  return (dispatch, getState) => {
    // console.log(entry);
    const id = getState().journal.entry_view._id;

    axios
      .put(`/api/edit_entry/${id}`, entry, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        console.log(res.data);
        dispatch({ type: 'EDIT_ENTRY', payload: res.data });

        history.push(`/entry/${id}`);
      });
  };
}
