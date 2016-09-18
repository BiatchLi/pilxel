import {
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE
} from '../constants';

const initialState = {
  isUploading: false,
  showPreview: true,
  newImage: null
}

const imageUpload = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_REQUEST:
      return Object.assign({}, state, { isUploading: true });
    case IMAGE_UPLOAD_SUCCESS:
      return Object.assign({}, state, { isUploading: false, showPreview: false,
        newImage: action.newImage });
    default:
      return state;
  }
};

export default imageUpload;
