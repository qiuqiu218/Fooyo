(function(){
	 
	 $(document).ready(
	 	function(){	 $(".menu>li").each(function(index, el) {
      if($(this).children('a').text()=="中文"||$(this).children('a').text()=="English"){
        $(this).children('a').appendTo('.lan')
      }
    }); if(window.location.href.search(/\/zh\//g)>0){
	  	$(".top nav .lan a:first-child").addClass('active')

   }
   else{
   	$(".top nav .lan a:last-child").addClass('active')
   }}

	 	)
;})(); 