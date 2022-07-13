import React from 'react'

const DarkMode = () => {
 

    const[theme,setTheme]=useState("light-theme");
    const toggletheme=()=>{
      if(theme=="dark-theme"){
        setTheme("light-theme");
      }else{
        setTheme("dark-theme")
      }
    }
  
  useEffect(()=>{
    document.body.className="theme";
  },[theme]);
  
    return (
      <div>
         <a href="#" className="btn" onClick={()=>toggletheme()}>Toogle Mode</a>
        </div>
  )

    }

export default DarkMode