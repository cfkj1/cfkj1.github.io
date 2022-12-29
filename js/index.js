$(document).ready(function(){
	var obj1 = $("#d1");
	var obj2 = $("#d2");
	var obj3 = $("#d3");	
	var zt = -1;
	var arr = [
	            [
					["鑱旀兂鍙板紡鐢佃剳","F12"],
					["鎯犳櫘鍙板紡鐢佃剳","F12"],
					["瀹忓熀鍙板紡鐢佃剳","F12"],
					["鎴村皵鍙板紡鐢佃剳","ESC"],
					["绁炶垷鍙板紡鐢佃剳","F12"],
					["鍗庣鍙板紡鐢佃剳","F8"],
					["鏂规鍙板紡鐢佃剳","F12"],
					["娓呭崕鍚屾柟鍙板紡鐢佃剳","F12"],
					["娴峰皵鍙板紡鐢佃剳","F12"],
					["鏄庡熀鍙板紡鐢佃剳","F8"]
				],
				[
					["鑱旀兂绗旇鏈�","F12"],
					["瀹忓熀绗旇鏈�","F12"],
					["澶栨槦浜虹瑪璁版湰","F12"],
					["灏忕背绗旇鏈�","F12"],
					["鍗庣绗旇鏈�","ESC"],
					["鎯犳櫘绗旇鏈�","F9"],
					["鑱旀兂Thinkpad","F12"],
					["鎴村皵绗旇鏈�","F12"],
					["绁炶垷绗旇鏈�","F12"],
					["涓滆姖绗旇鏈�","F12"],
					["涓夋槦绗旇鏈�","F12"],
					["IBM绗旇鏈�","F12"],
					["瀵屽＋閫氱瑪璁版湰","F12"],
					["娴峰皵绗旇鏈�","F12"],
					["鏂规绗旇鏈�","F12"],
					["娓呭崕鍚屾柟绗旇鏈�","F12"],
					["寰槦绗旇鏈�","F11"],
					["鏄庡熀绗旇鏈�","F9"],
					["鎶€鍢夌瑪璁版湰","F12"],
					["Gateway绗旇鏈�","F12"],
					["eMachines绗旇鏈�","F12"],
					["绱㈠凹绗旇鏈�","ESC"],
					["鑻规灉绗旇鏈�","寮€鏈洪暱鎸塷ption閿�"]
				],
			    [
					["鍗庣涓绘澘","F8"],
					["鎶€鍢変富鏉�","F12"],
					["寰槦涓绘澘","F11"],
					["鏄犳嘲涓绘澘","F9"],
					["姊呮嵎涓绘澘","ESC鎴朏12"],
					["涓冨僵铏逛富鏉�","ESC鎴朏11"],
					["鍗庢搸涓绘澘","F11"],
					["鏂反杈惧崱涓绘澘","ESC"],
					["鏄傝揪涓绘澘","F11"],
					["鍙屾晱涓绘澘","ESC"],
					["缈斿崌涓绘澘","F10"],
					["绮捐嫳涓绘澘","ESC鎴朏11"],
					["鍐犵洘涓绘澘","F11鎴朏12"],
					["瀵屽＋搴蜂富鏉�","ESC鎴朏12"],
					["椤舵槦涓绘澘","F11鎴朏12"],
					["閾憚涓绘澘","ESC"],
					["鐩堥€氫富鏉�","F8"],
					["鎹锋尝涓绘澘","ESC"],
					["Intel涓绘澘","F12"],
					["鏉板井涓绘澘","ESC鎴朏8"],
					["鑷撮摥涓绘澘","F12"],
					["纾愯嫳涓绘澘","ESC"],
					["纾愭涓绘澘","ESC"],
					["鍐犻摥涓绘澘","F9"]
				]
			];	
				
    function sel2(e){
	    var s = "";
		for(var i=0; i<arr[e].length;i++){
			s+="<li data-n="+arr[e][i][0]+">"+arr[e][i][0]+"</li>\n";
		}
		return s;
	}
	function sel3(e){
		var j='';
		for(var i=0;i<arr[zt].length;i++){
			if(arr[zt][i][0]==e)j=arr[zt][i][1];
		}
		obj3.html(j);
	}
	
	var toggleA = false
	obj1.click(function(){
		toggleA = !toggleA
		if (toggleA) {
			$(this).find('li').show()	
		    obj1.find('ul').addClass('srcoll')
		}else {
			$(this).find('li').hide()
		} 	
	});
	
	obj1.mouseleave(function(){
	  $(this).find('li').hide()
	  obj1.find('ul').removeClass('srcoll')	
	  toggleA = false
	})    

	
	obj1.find('li').click(function(){
	    switch($(this).attr('data-n')){
			case "-1":
			  zt = -1;
			  obj2.find('.text').text('-閫夋嫨鐢佃剳鍝佺墝-')
			  obj1.find('.text').text('-閫夋嫨鐢佃剳绫诲瀷-')
			  obj2.find('.list').html('')
			  $('.select').css('background','none')
			  obj1.find('p').removeClass('bg')	
			  obj2.find('p').removeClass('bg')				  
			  break;
			case "1": 
			  zt = 1;
			  obj2.find('.list').html(sel2(1))
			  obj1.find('.text').text('鍝佺墝绗旇鏈�').parent().addClass('bg')	
			  obj2.find('.text').text(arr[zt][0][0]).parent().addClass('bg')	
			  break;
			case "2":
			  zt = 2;
			  obj2.find('.list').html(sel2(2));
			  obj1.find('.text').text('缁勮鍙板紡鐢佃剳').parent().addClass('bg')
			  obj2.find('.text').text(arr[zt][0][0]).parent().addClass('bg')	
			  break;
			case "3":
			  zt = 0;
			  obj2.find('.list').html(sel2(0));
			  obj1.find('.text').text('鍝佺墝鍙板紡鐢佃剳').parent().addClass('bg')
			  obj2.find('.text').text(arr[zt][0][0]).parent().addClass('bg')
			  break;
		}
		if(zt<0){
		  obj3.html('璇峰湪宸︿晶閫夋嫨鏌ヨ椤�');
		}else{
		  obj3.html(arr[zt][0][1])
		}
		obj1.find('li').hide()
		obj1.find('ul').removeClass('srcoll')	
	})

	var toggleB = false

	obj2.click(function(){      
      if(zt<0) return;
	  toggleB = !toggleB
	  if (toggleB){
	  	obj2.find('li').show();
	  	obj2.find('ul').addClass('srcoll')
	  }else {
	  	obj2.find('li').hide();	  	
	  }
	});	
	
	obj2.mouseleave(function(){
	  $(this).find('li').hide()
	  obj2.find('ul').removeClass('srcoll')
	  toggleB= false
	}) 
	
    obj2.on('click','li',function(){
	  if(zt<0) {
	   	obj3.html('璇峰湪宸︿晶閫夋嫨鏌ヨ椤�');
	  } else {
	   	sel3($(this).attr('data-n'));
	  } 
	  obj2.find('li').hide()
	  obj2.find('.text').text($(this).text())
	  obj2.find('ul').removeClass('srcoll')
    })
   
    var productName = ['鍝佺墝鍙板紡','鍝佺墝绗旇鏈�','涓绘澘']
    for( var j = 0; j < arr.length; j++ ){
    	var $product = $('<div class="layout product-list"><div class="title">'+productName[j]+'</div></div>')
        var $ul = $('<ul class="find-item"></ul>')
    	for(var k= 0; k < arr[j].length; k++){
            var str = '<li><span class="name-p">'+arr[j][k][0]+'</span><span>'+arr[j][k][1]+'</span></li>'
	    	$ul.append($(str)) 
    	}	    
	    $('.brand-name').append($product.append($ul))        
    }
});
