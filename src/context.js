import React, { useContext, useEffect, useState } from "react";

 export const API_URL=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

// we nedd to create provider fun \
const AppProvider = ({ children }) => {
      //for pass the data from this to movie page we declared state here//

      const [isLoading,setIsLoading]=useState(true);
      const [movie,setMovies] = useState([])
     const [isError,setIsError] = useState({show:false, msg:""});

      const [query, setQuery] = useState('titanic')

  //Here we get api in console form thi get movie function//
  const getMovies =async(url)=>{
    setIsLoading(true);
     try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response==="True")
        {
          setIsLoading(false);
          setIsError({
            show:true,
            msg:"",
          })
          setMovies(data.Search);
        }
        else{
          setIsError({
            show:true,
            msg:data.Error,
          })
        }
     }
     catch(error){
      console.log(error);
     }
  }
 //Here we did debouncing for the show after few seconds//
    useEffect(()=>{
      
      let timerOut = setTimeout(()=>{
        getMovies(`${API_URL}&s=${query}`); 
      },1000);
    //   //Here use show only once obeject//
      return ()=> clearTimeout(timerOut);
    },[query])
    //Here we complete the debouncing 
    
  return(
   <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>
           {children}
  </AppContext.Provider>
  )
};

// Global custom Hooks
const useGlobalContext = () => {
   return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }  