import cookies from "universal-cookie";


  const setCookie = (name, value, exp = 5) => {
    let date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
  };
  
  const deleteCookie = (name) => {
    let date = new Date("2022-01-01").toUTCString();
    document.cookie = name + "=; expires=" + date;
  };

  const getCookie = (refreshcookie) => {
    const cookieValue=null;
    if(document.cookie){
        const array=document.cookie.split((escape('refreshcookie')+'='));
        if(array.length >= 2){
            var arraySub=array[1].split(';');
            cookieValue=unescape(arraySub[0]);
        }
    }
    return cookieValue;
}
  
  export { setCookie, deleteCookie, getCookie };
  