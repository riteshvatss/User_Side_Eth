import { useWriteContract } from "wagmi";
import {approveAbi} from "./Abi"
import React from "react";
 
 function Approve(){

    const {writeContract}=useWriteContract();

    async function Submit(e:React.FormEvent<HTMLFormElement>) {
         e.preventDefault();

        writeContract({
            address:'0xdAC17F958D2ee523a2206206994597C13D831ec7',
            abi:approveAbi,
            functionName:'approve',
            args:["0x2966473D85A76A190697B5b9b66b769436EFE8e5",BigInt(10000)],


        })
        console.log("gaskhd");
        
    }

    return<form onSubmit={Submit}>
        <button type="submit">submit </button>

    </form>



}

export default Approve;