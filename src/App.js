import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {title: 'What is React?', content: 'React is a frontend JS framework'},
  {title: 'Why use React?', content: 'It is a fav lib among engineers'},
  {
    title: 'How do you use React',
    content: 'You use React by creating components',
  },
];

const options = [
  {label: 'The Color Red', value: 'red'},
  {label: 'The Color Green', value: 'green'},
  {label: 'The Color Blue', value: 'blue'},
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle</button>
      {showDropdown ? 
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
      /> : null
    }
    </div>
  );
};
