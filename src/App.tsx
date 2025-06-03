import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { WalletOptions } from './Walletoptions'
import { Account } from './Account'

const queryClient = new QueryClient()
import { useAccount } from 'wagmi'
import Approve from './Approve'
import Balance from './Balance'

//  function Profile() {
//   const { address } = useAccount()
//   const { data, error, status } = useEnsName({ address })
//   if (status === 'pending') return <div>Loading ENS name</div>
//   if (status === 'error')
//     return <div>Error fetching ENS name: {error.message}</div>
//   return <div>ENS name: {data}</div>
// }


function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
           <ConnectWallet></ConnectWallet>
           <Approve></Approve>
           <Balance></Balance>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App;