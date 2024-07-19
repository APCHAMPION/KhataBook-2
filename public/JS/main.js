function onclicktoshow(value){
    const encodedParam = encodeURIComponent(value);
    window.location.href =`/view/${encodedParam}`;
}