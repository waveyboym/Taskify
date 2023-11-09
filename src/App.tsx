import { useState } from "react";
import { Header, TableContainer } from "./components";

const App = () => {
  const [isSupportedOS, setIsSupportedOS] = useState<boolean>(false);

  function set_OS_supported_state(set_to: boolean){
    setIsSupportedOS(set_to);
  }

  return (
    <div>
      <Header set_OS_supported_state={set_OS_supported_state} />
      {
        isSupportedOS === true ?
          <TableContainer />
          :
          <div>This os: {window.gateway.osType} is not supported</div>
      }
    </div>
  )
}

export default App;