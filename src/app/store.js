
import {configureStore} from '@reduxjs/toolkit';
import getGalleryReducer from '../features/gallerySlice';

const store = configureStore({
    reducer: {
        gallery: getGalleryReducer
    }
});

export default store;
