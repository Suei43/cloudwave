import CopyLinkBox from "./CopyLink";
import { useState, useEffect } from "react";

export default function SharePopUp(){
    const [close, setClose] = useState(true);

    function toggleClose(e){
        e.stopPropagation();
        setClose(!close)};

    useEffect(() => {
        function handleDocumentClick() {
          setClose(false);
        }
        document.body.addEventListener("click", handleDocumentClick);
    
        return () => {
          document.removeEventListener("click", handleDocumentClick);
        };
      }, []);

    return (
            (close && <div className="h-screen w-full absolute top-0 left-0">
            <div className='w-4/12 bg-white rounded-2xl relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-5 flex flex-col gap-y-5 shadow-md border'>
                <div className="flex flex-row gap-x-3 items-center h-fit">
                    <i className='fas fa-share-alt text-blue-500'></i>
                    <h1 className="text-md text-blue-500 font-black">Share</h1>
                </div>
                <h3 className="text-xs text-gray-500 ml-2.5">Copy this link to share</h3>
                <CopyLinkBox/>
                <h3 className="text-xs text-gray-500 ml-2.5 mb-3">Anyone with this link can view this file!</h3>
                <button className="absolute top-3 right-3 text-white" onClick={(e)=>toggleClose(e)}>
                    <i className="fas fa-times-circle text-red-700 text-xl rounded-full"></i>
                </button>
            </div>
        </div>)
        )
}