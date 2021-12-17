var pr = new Promise((resolve,reject)=>{

    var condition = true;
    if(condition){
        console.log('Enter pin ');
        resolve('succesfully money withdrawn');

    }
    else{
        console.log('pin galat hai ');
        reject('AMount greter than 10k');
    }

});

// pr.then(success, failure);
// pr.then(success).catch(failure);
pr.then(success).catch(failure).finally(def);


function success(msg){
    console.log('promise is succesful');
    console.log(msg);
}

function failure(){
    console.log('promise not succesful');
    console.log(msg);
}

function def(msg){
    console.log('finally bloc cretaed');
}
