import {API} from '../dal/api';

const SET_CURRENT_LEVEL = 'SET_CURRENT_LEVEL';
const SET_ALL_DATA_FROM_BACK = 'SET_ALL_DATA_FROM_BACK';

const initialState = {
  currentLevel: 1,
  allDataFromBack: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LEVEL:
      return {...state, currentLevel: action.currentLevel};
    case SET_ALL_DATA_FROM_BACK:
      return {...state, allDataFromBack: action.allDataFromBack};
    default:
      return state;
  }
};

export const setCurrentLevel = currentLevel => ({
  type: SET_CURRENT_LEVEL,
  currentLevel,
});
export const setAllDataFromBack = allDataFromBack => ({
  type: SET_ALL_DATA_FROM_BACK,
  allDataFromBack,
});

export const getAllDataFromBack = () => async dispatch => {
  try {
    const res = await API.getData();
    console.log(res.data);
    dispatch(setAllDataFromBack(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getAllDataFromBackNEW = () => async dispatch => {
  try {
    const res = await API.getAllWords();
    console.log('res', res.data.data);
    dispatch(setAllDataFromBack(res.data.data));
  } catch (err) {
    console.log('err', err);
  }
};
