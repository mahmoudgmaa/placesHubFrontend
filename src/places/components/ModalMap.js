import React,{useRef,useEffect,useCallback} from 'react'
import styled from "styled-components"
import {MdClose} from "react-icons/md"
import {useSpring,animated} from "react-spring"
import Map from "./map";


const Background=styled.div`
width:100vw;
height:100vh;
background:rgba(255,255,255,0.5);
backdrop-filter: blur(10px);
--webkit-backdrop-filter: blur(10px);
position:fixed;
display:flex;
justify-content:center;
align-items:center;
z-index: 100;
`

const ModalWrapper=styled.div`
width:800px;
height:500px;
background:#fff;
box-shadow:0 5px 16px rgba(0,0,0,0.2);
display:grid;
position:relative;
border-radius:10px;
z-index:1000;
grid-template-columns:1fr;
grid-template-rows:1fr 6fr;
`

const ModalTitle=styled.div`
width:100%;
color:white;
justify-content:start;
align-items:left;
background:blue;
padding:16px 32px;

h3{
    color:white;
}
`

const CloseModalButton=styled(MdClose)`
cursor:pointer;
position:absolute;
top:20px;
right:20px;
width:32px;
height:32px;
padding:0;
z-index:10;
`

const ModalContent=styled.div`
width:100%;
height:100;
background:white;
`

 

const ModalMap = ({showModal,setShowModal}) => {
    const animation=useSpring({
        config:{
            duration:250
        },
        opacity:showModal?1:0,
        transform:showModal?`translateY(0%)`:`translateY(-100%)`
    })

    const ModalRef=useRef(null);
    const handleClick=(e)=>{
        if(ModalRef.current===e.target){
            setShowModal((prev)=>{
               return {...prev,visible:false}
            });
        }
    }

    const keyPress=useCallback(e=>{
        if(e.key==="Escape"&&showModal){
            setShowModal((prev)=>{
               return {...prev,visible:false}
            });
        }
    },[setShowModal,showModal]);


    useEffect(()=>{
        document.addEventListener("keydown",keyPress);
        return ()=>document.removeEventListener("keydown",keyPress);
    }, [])


    return (
        <>
        {showModal.visible?
        <Background ref={ModalRef} onClick={handleClick}>
            <animated.div style={animation}>
            <ModalWrapper >
                <ModalTitle>
                    <h3>{showModal.address}</h3>
                    <CloseModalButton onClick={()=>setShowModal(prev=>!prev)}/>
                </ModalTitle>
                <ModalContent>
                    <Map center={showModal.coordinates} zoom={16}/>
                </ModalContent>
            </ModalWrapper>
            </animated.div>
        </Background>
        :null}
        </>
    )
}

export default ModalMap
