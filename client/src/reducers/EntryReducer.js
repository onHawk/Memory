import {
  ENTRIES,
  ENTRY,
  CREATE_ENTRY,
  DELETE_ENTRY,
  EDIT_ENTRY,
  SORT_NEW,
} from '../actions/EntryActions';

const initialState = {
  entries: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ENTRIES:
      return { ...state, entries: action.payload };
    case ENTRY:
      return { ...state, entry_view: action.payload };
    case CREATE_ENTRY:
      return { ...state, entry: action.payload };
    case DELETE_ENTRY:
      const updated = state.entries.filter(e => e._id !== action.payload._id);

      return { ...state, entries: updated };
    case EDIT_ENTRY:
      return { ...state, entry: `edited ${action.payload}` };
    case SORT_NEW:
      // console.log(action.payload);

      return { ...state, entries: state.entries.reverse() };
    default:
      return state;
  }
}

// const newSorted = state.entries.sort((a, b) => {
//   const aTime = moment(a.createdOn)
//     .startOf('day')
//     .fromNow();
//   const bTime = moment(a.createdOn)
//     .startOf('day')
//     .fromNow();
//   // console.log(bTime);

//   return aTime < bTime;
// });
