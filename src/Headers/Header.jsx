import React, { useContext} from 'react'
import classes from '../Headers/Header.module.css'
import Switch from '@mui/material/Switch';
import MyContext from '../store/ChangeColor-context';

function Header() {
  const { bgColor, setBgColor } = useContext(MyContext)
  const handleChange = (event) => {
    setBgColor(event.target.checked);
  };

  return (
    <div className={classes.header}>
      <Switch
        checked={bgColor}
        onChange={handleChange}
      />
    </div>
  );
}

export default Header