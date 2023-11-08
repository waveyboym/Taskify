import { useState } from "react";
import { Header, TasksTable } from "./components";

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
          <TasksTable />
          :
          <div>This os: {window.gateway.osType} is not supported</div>
      }
    </div>
  )
}

export default App;