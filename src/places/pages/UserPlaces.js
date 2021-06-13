import React,{useState} from "react";
import {useParams} from "react-router-dom";
import PlacesList from "../components/placesList"
import img from "../../assests/download.jpg"
import img1 from "../../assests/download1.jpg"
import img2 from "../../assests/download2.jpg"
import Modal from "../components/ModalMap"



const items=[{
    id:"p1",
    img:img,
    headline:"mosque",
    address:"Istanbul, Turkey",
    description:"is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors",
    coordinates:{
        lat:41.0054096,
        lng:28.9746251
    },
    creatorid:"u1"},
    
    {
    id:"p2",
    img:img1,
    headline:"bridge",
    address:"Istanbul, Turkey",
    description:"is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors",
    coordinates:{
        lat:41.0054096,
        lng:28.9746251
    },
    creatorid:"u2"},
    
    {
    id:"p2",
    img:img2,
    headline:"mountain",
    address:"Istanbul, Turkey",
    description:"is an Ottoman-era friday mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors",
    coordinates:{
        lat:41.0054096,
        lng:28.9746251
    },
    creatorid:"u3"}];


const MyPlaces=()=>{
    const[showModal,setShowModal]=useState({ visible: false, address: null, coordinates:null});
    const userId=useParams().userid;
    const loadedPlaces=items.filter(place=>place.creatorid===userId);

    const handlCustomEvent = (e) => {
        console.log(e);
    }


    return<>
    {showModal&&<Modal showModal={showModal} setShowModal={setShowModal}/>}
    <PlacesList 
        items={loadedPlaces}
        onCustomEvent={handlCustomEvent}
        setShowModal={setShowModal}
        showModal={showModal}
    />
    </>
}

export default MyPlaces;