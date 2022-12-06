import Navbar from './components/Navbar';
import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { Web3Modal } from "@web3modal/react";

const chains = [chain.mainnet, chain.polygon, chain.polygonMumbai, chain.arbitrum];

const {provider} = configureChains(chains, [
    walletConnectProvider({projectId: "b08c4d212ce5bfdb690669143407dfd1"})
]);

const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: "BlockPe", chains }),
    provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <>
    <WagmiConfig client={wagmiClient}>
        <Navbar />
    </WagmiConfig>
    
    <Web3Modal
    themeColor='green'
    themeMode='light'
    projectId="b08c4d212ce5bfdb690669143407dfd1"
    ethereumClient={ethereumClient}
    />

    </>
      
  );
}

export default App;
