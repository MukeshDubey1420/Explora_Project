function myFunction(){
$.ajax({
  url: 'http://acadprojects.com/py/explora/subject',
  type: 'GET',
  success: function(result){
   console.log(result);
    for(i in result.data){
    $("#selectsub").append($('<option>'+result.data[i].name+'</option>'));
  }
}
});
}

function fetchData(){
$.ajax({
  url: 'http://acadprojects.com/py/explora/question?page=0&type=recent',
  type: 'GET',
  success: function(result){
    console.log(result);
    $("#recentdescp").find('h3').append($('<h3>'+result.data[0].posted_by_name+'</h3>'));

}


});
}
