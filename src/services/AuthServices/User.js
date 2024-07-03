 export const postDataApi = async (url,data1) => {
    const url = {url};
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data1),
      });
      if (!response.ok) {
        console.warn(response.status, 'error occured');
      }
      const result = await response.json();
    //   setData(result);
    //   console.warn(result);
    return 'success';
    } catch (e) {
        return 'failed';
      console.warn(e);
    }
  };

  export const isUserRegistered = async (url, data) => {
    const url = {url};
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.warn(response.status, 'error occured');
      }
      const result = await response.json();
      if(result.email === data.email && result.password === data.password){
        return 'success';
      }else{
        return 'failed';
      }
    } catch (e) {
        return 'failed';
      console.warn(e);
    }
  };
