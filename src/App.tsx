import Chat from "./components/Chat"
import ContainerLogins from "./components/ContainerLogins"
import SendMessages from "./components/SendMessages"

const App: React.FC = () => {
  return (
    <>
      <ContainerLogins />
      <Chat />
      <SendMessages />
    </>
  )
}

export default App
