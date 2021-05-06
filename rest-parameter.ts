function displayColors(...restParameter) {
    for(let i in restParameter) {
        console.log(restParameter[i]);
    }
}

displayColors("Immediately");
displayColors("Immediately","Invoke");
displayColors("Imvoke","establish","hoisting");