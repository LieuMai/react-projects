import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturns = () => {
  // user variables
  const [user,setUser] = useState('default user');
  const [img,setImg] = useState('default img');
  const [company,setCompany] = useState('default company');

  const [isError,setIsError] = useState(false);
  const [isLoading,setIsLoading] = useState(true);

  //
  useEffect(() => {
    fetch(url)
    .then((respone) => {
      if(respone.status >= 200 && respone.status <= 299) {
        respone.json();
      }
      else {
        setIsLoading(false)
        setIsError(true)
      }
    })
    .then((user) => {
      const { login,avatar_url,html_url,company } = user;
      setUser(login)
      setImg(avatar_url)
      setCompany(company)
      setIsLoading(false)
    })
    .catch((error) => console.log(error));
  }, []);


  if(isLoading) {
    return <h2>Loading...</h2>
  } 
  else if(isError) {
    return <h2>ERROR 404 MEI NOT FOUND</h2>
  }
  return <>
    <img src={img} alt="" />
    <h2>{user}</h2>
    <p>{company}</p>
  </>
};

export default MultipleReturns;
