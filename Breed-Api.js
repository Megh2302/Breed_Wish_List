$(document).ready(function () {
    var breed_list = $('#show-data');
    var breedList_Api = "https://dog.ceo/api/breeds/list/all";
    $.getJSON(breedList_Api, function (data) {
        Object.keys(data.message).forEach(function(key) {
            var dog_list = '<option value= "'+key+'">' + key + '</option>';
            breed_list.append(dog_list);
            let obj = data.message[key];
            obj.forEach(function(element) {
                var dog_list ='<option value = "'+key+"::"+element+'" class="option">&nbsp;&nbsp;&nbsp;&nbsp;'+element+'</option>'
                breed_list.append(dog_list);
            });
        });
    });
});

var id = 1;
$(document).ready(function() {
    $('#btnClick').click(function(event) {
        var showdetail = $('#show-detail');
        var dog_data = document.getElementById("show-data").value;
        url1 = "";
        if(dog_data.includes("::")){
            var arr = dog_data.split("::");
            url1='https://dog.ceo/api/breed/'+arr[0]+'/'+arr[1]+'/images/random';
        }else{

            url1='https://dog.ceo/api/breed/'+dog_data+'/images/random';
        }
        $.getJSON(url1, function (data) {
            var dog_img = '<img src='+data.message+' id="img">';
            var remove_dog = '<button id = "btn-'+id+'" class="dlt btn-primary">Delete</button>';
            var dog_name = '<label class="dn">'+ document.getElementById("show-data").value +'</label>';
            var dog_detail = '<span id = "div-'+id+'" class = "dog_wishlist">'+'<br>'+dog_img+'<br>'+dog_name+'<br>'+remove_dog+'<br>'+'</span>';
            showdetail.append(dog_detail);
            id++;
            $(".dlt").click(function() {
                var arr1 = this.id.split("-");
                var divid = "div-"+arr1[1]
                var myNode = document.getElementById(divid);
                console.log(this.id);
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
            });
        });
    });
});