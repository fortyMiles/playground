var all_user_data = [];

function log_stuff(user_data){
    if(typeof user_data == "string"){
        console.log(user_data);
    }else if(typeof user_data == "object"){
        for(var item in user_data){
            console.log(item + ':' + user_data[item]);
        }
    }
}
 
function get_input(options, callback){
    all_user_data.push(options);
    arg1 = 'test';
    callback('test1', 'test2');
}

var Test = function(){


    var name = 'a';
    get_input({name:'Rich', age:19}, function(arg1, arg2){
        console.info(arg1 + ' ' + arg2);
        console.log('in callback');
        name = 'not a';
    });

    console.info('name == ' + name);
}

var test = new Test();


