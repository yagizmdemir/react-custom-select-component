import { useState } from 'react';
import CustomSelect from './components/CustomSelect';

function App() {

  const [options, setOptions] = useState([
    {
      label: "Option 1",
      value: "opt1",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    },
  ])

  const handleChangeSelect = (e) => {
    console.log(e)
  }

  return (
    <div className="App">
      <CustomSelect
        options={options}
        placeHolder='Please select...'
        onChange={(e) => handleChangeSelect(e)}
        isSearchable
        isMulti
      />
    </div>
  );
}

export default App;
