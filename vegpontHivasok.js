export function adatUj(vegpont, adat) {
    //promisse
    fetch(vegpont, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adat),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  export function adatBeolvas(vegpont, callbackFv) {
    //promisse
    fetch(vegpont, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        callbackFv(data);
      })
      .catch((error) => console.log(error));
  }
  export function adatTorol(vegpont, id) {
    //promisse
    vegpont = vegpont + "/" + id;
    console.log(vegpont)
     fetch(vegpont, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error)); 
  }