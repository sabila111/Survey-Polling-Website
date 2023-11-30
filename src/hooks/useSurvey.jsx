import React, { useEffect, useState } from 'react';

const useSurvey = () => {
      const [menu, setMenu]= useState([])
    const [loading, setLoading]= useState(true)
     useEffect(()=>{
        fetch('https://server-polling-server.vercel.app/survey')
        .then(res => res.json())
        .then(data =>{
            setMenu(data)
            setLoading(false)
        })
     },[])
    return[menu, loading]
};

export default useSurvey;