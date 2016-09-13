
var $ = require('../libs/jquery.js');

module.exports = function(){
    $.ajax({
        // url: '/fekitDemo/mock/index.json',
        url: '/api/getIndexList',
        type: 'get',
        data: {},
        success: function(res){
            var str = '';
            $.each(res.data, function(index, value){
                // console.log(index+" "+value);
                str += "<li>"+value+"</li>"
            });
            $('.body ul').html(str);
        }
    });
}