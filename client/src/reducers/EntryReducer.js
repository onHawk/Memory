import {
  ENTRIES,
  ENTRY,
  CREATE_ENTRY,
  DELETE_ENTRY,
  EDIT_ENTRY,
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
    default:
      return state;
  }
}
