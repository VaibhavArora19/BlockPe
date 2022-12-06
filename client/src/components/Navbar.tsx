import classes from "./Navbar.module.css";
import { Web3Button } from "@web3modal/react";
import {useAccount, useProvider} from "wagmi";
import { useContract, useSigner } from 'wagmi'

const Navbar = () => {
    const { connector: activeConnector, isConnected } = useAccount()
    const provider = useProvider();
    const {data:signer, isError, isLoading} = useSigner();

    if(isConnected){
        console.log(provider);
        console.log("signer is", signer?.getAddress());
    }

    console.log("is connected is", isConnected);
    return (
        <div className={classes.navbar}>
            <div>
                <h1>BlockPe</h1>
            </div>
            <div>
                <ul>
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                </ul>
            </div>
            <div>
                <Web3Button />
            </div>
        </div>
    )
};

export default Navbar;