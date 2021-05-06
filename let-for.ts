for(var i = 1; i<= 5; i++) {
    (function(x) {
        setTimeout(function(){
            console.log(x);
        }, 1000);
    })(i);
    
}

// use var i thì result -> 6 (Do hàm settimeout chạy sau khi hàm for)
// use let i will result 1->5 (After Compile: it will create new function)