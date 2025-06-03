import { useReadContract } from "wagmi";
import { balanceAbi } from "./Abi";

function Balance(){
    const {data,isLaoding,error}=useReadContract({
        address:'0xdAC17F958D2ee523a2206206994597C13D831ec7',
        abi:balanceAbi,
        functionName:'balances',
        args:["0x2966473D85A76A190697B5b9b66b769436EFE8e5"],
    })

    return<>
    {data.toString()}
    </>


}

export default Balance;