import {createSlice} from '@reduxjs/toolkit';

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        gallery: [],
       
    },
    reducers: {
        getGallery: (state,action)=> {
            state.gallery=action.payload;
        },
        addGallery: (state,action)=> {
            state.gallery.push(action.payload);
        },
        editGallery: (state,action)=> {
            state.gallery.map((pic)=>{
                if(pic.id==action.payload.id){
                   [ ...pic,pic.artist=action.payload.artist]
                
                }
            })
        },
        deleteGallery: (state,action)=> {
            state.gallery=state.gallery.filter((pic)=>{
                return pic.id!=action.payload
            })
        }  

    }
});

export default gallerySlice.reducer

export const {getGallery,addGallery,editGallery,deleteGallery}=gallerySlice.actions