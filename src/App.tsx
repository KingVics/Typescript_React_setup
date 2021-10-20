import { Provider } from "react-redux"
import { store } from './state/store';
import RepositoryList  from "./components/RepositoryList";


function App() {  
  return (
    <Provider store={store}>
      <h1>Search for packages</h1>
      <RepositoryList />
    </Provider>
  );
}

export default App;
