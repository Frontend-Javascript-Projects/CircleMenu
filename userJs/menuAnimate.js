var id1 = null;
var id2 = null;
var id3 = null;
var id4 = null;
var id5 = null;
var radius = 70;  
var oneDegree = Math.PI / 180;

function menuOpen(element_id) {
    var elem1 = document.getElementById('menu1_'+element_id); 
    var elem2 = document.getElementById('menu2_'+element_id); 
    var elem3 = document.getElementById('menu3_'+element_id); 
    var elem4 = document.getElementById('menu4_'+element_id); 
    var elem5 = document.getElementById('menu5_'+element_id); 
    var angle = Math.PI / 4;
    clearInterval(id1);
    clearInterval(id2);
    clearInterval(id3);
    clearInterval(id4);
    clearInterval(id5);
    id1 = setInterval(frame1, 1);
    id2 = setInterval(frame2, 1);
    id3 = setInterval(frame3, 1);
    id4 = setInterval(frame4, 1);
    id5 = setInterval(frame5, 1);
    
    function frame1() {
      if (angle > Math.PI / 4) {
        clearInterval(id1);
      } else {
        angle = angle + oneDegree;
        elem1.style.top = (45 + radius*Math.cos(angle)) + "px"; 
        elem1.style.left = (90 + radius*Math.sin(angle))+"px"; 
      }
    }
    function frame2() {
      if (angle > (Math.PI/4 + Math.PI/3)) {
        clearInterval(id2);
      } else {
        angle = angle + oneDegree;
        elem2.style.top = (45 + radius*Math.cos(angle)) + "px"; 
        elem2.style.left = (90 + radius*Math.sin(angle))+"px"; 
      }
    }
    function frame3() {
      if (angle > (Math.PI/4 + 2*Math.PI/3)) {
        clearInterval(id3);
      } else {
        angle = angle + oneDegree;
        elem3.style.top = (45 + radius*Math.cos(angle)) + "px"; 
        elem3.style.left = (90 + radius*Math.sin(angle))+"px"; 
      }
    }
    function frame4() {
      if (angle > 5/4*Math.PI) {
        clearInterval(id4);
      } else {
        angle = angle + oneDegree;
        elem4.style.top = (45 + radius*Math.cos(angle)) + "px"; 
        elem4.style.left = (90 + radius*Math.sin(angle))+"px"; 
      }
    }
    function frame5() {
      if (angle > 6/4*Math.PI) {
        clearInterval(id4);
      } else {
        angle = angle + oneDegree;
        elem5.style.top = (45 + radius*Math.cos(angle)) + "px"; 
        elem5.style.left = (90 + radius*Math.sin(angle))+"px"; 
      }
    }
  }
function menuClose(element_id) {
    var elem1 = document.getElementById('menu1_'+element_id); 
    var elem2 = document.getElementById('menu2_'+element_id); 
    var elem3 = document.getElementById('menu3_'+element_id); 
    var elem4 = document.getElementById('menu4_'+element_id); 
    var elem5 = document.getElementById('menu5_'+element_id); 
    var angle1 = Math.PI / 4;
    var angle2 = Math.PI/4 + Math.PI/3;
    var angle3 = Math.PI/4 + 2*Math.PI/3;
    var angle4 = 5/4*Math.PI;
    var angle5 = 6/4*Math.PI;
    clearInterval(id1);
    clearInterval(id2);
    clearInterval(id3);
    clearInterval(id4);
    clearInterval(id5);
    id1 = setInterval(frame1, 1);
    id2 = setInterval(frame2, 1);
    id3 = setInterval(frame3, 1);
    id4 = setInterval(frame4, 1);
    id5 = setInterval(frame5, 1);
    
    function frame1() {
      if (angle1 < Math.PI / 4) {
        clearInterval(id1);
      } else {
        angle1 = angle1 - oneDegree;
        elem1.style.top = (45 + radius*Math.cos(angle1)) + "px"; 
        elem1.style.left = (90 + radius*Math.sin(angle1))+"px"; 
      }
    }
    function frame2() {
      if (angle2 < Math.PI / 4) {
        clearInterval(id2);
      } else {
        angle2 = angle2 - oneDegree;
        elem2.style.top = (45 + radius*Math.cos(angle2)) + "px"; 
        elem2.style.left = (90 + radius*Math.sin(angle2))+"px"; 
      }
    }
    function frame3() {
      if (angle3 < Math.PI/4 ) {
        clearInterval(id3);
      } else {
        angle3 = angle3 - oneDegree;
        elem3.style.top = (45 + radius*Math.cos(angle3)) + "px"; 
        elem3.style.left = (90 + radius*Math.sin(angle3))+"px"; 
      }
    }
    function frame4() {
      if (angle4 < Math.PI/4) {
        clearInterval(id4);
      } else {
        angle4 = angle4 - oneDegree;
        elem4.style.top = (45 + radius*Math.cos(angle4)) + "px"; 
        elem4.style.left = (90 + radius*Math.sin(angle4))+"px"; 
      }
    }
    function frame5() {
      if (angle5 < Math.PI/4) {
        clearInterval(id4);
      } else {
        angle5 = angle5 - oneDegree;
        elem5.style.top = (45 + radius*Math.cos(angle5)) + "px"; 
        elem5.style.left = (90 + radius*Math.sin(angle5))+"px"; 
      }
    }
  }

  $(".generation-image").hover(function () {
          // over
        var id = $(this).attr('id');
        var res = id.slice(6);
        var posX1 = 90 + radius*Math.sin(Math.PI / 4);
        var posY1 = 45 + radius*Math.cos(Math.PI / 4);
        var posX2 = 90 + radius*Math.sin(Math.PI / 4);
        var posY2 = 45 + radius*Math.cos(Math.PI / 4);
        var posX3 = 90 + radius*Math.sin(Math.PI / 4);
        var posY3 = 45 + radius*Math.cos(Math.PI / 4);
        var posX4 = 90 + radius*Math.sin(Math.PI / 4);
        var posY4 = 45 + radius*Math.cos(Math.PI / 4);
        var posX5 = 90 + radius*Math.sin(Math.PI / 4);
        var posY5 = 45 + radius*Math.cos(Math.PI / 4);
        $('.menu1_'+res).css({"left":posX1,"top":posY1}).show();
        $('.menu2_'+res).css({"left":posX2,"top":posY2}).show();
        $('.menu3_'+res).css({"left":posX3,"top":posY3}).show();
        $('.menu4_'+res).css({"left":posX4,"top":posY4}).show();
        $('.menu5_'+res).css({"left":posX4,"top":posY4}).show();
        $('.menu6_'+res).css({"left":posX5,"top":posY5}).show();



      }, function () {
          // out
        var id = $(this).attr('id');
        var res = id.slice(6);
        $('.menu1_'+res).hide();
        $('.menu2_'+res).hide();
        $('.menu3_'+res).hide();
        $('.menu4_'+res).hide();
        $('.menu5_'+res).hide();
        $('.menu6_'+res).hide();
      }
  );
  $(".generation-image").click(function (e) { 
      e.preventDefault();
      var id = $(this).attr('id');
      var res = id.slice(6);
      $('.menu1_'+res).addClass("active");
      $('.menu1_'+res).removeClass("menu1_"+res);
      $('.menu2_'+res).addClass("active");
      $('.menu2_'+res).removeClass("menu2_"+res);
      $('.menu3_'+res).addClass("active");
      $('.menu3_'+res).removeClass("menu3_"+res);
      $('.menu4_'+res).addClass("active");
      $('.menu4_'+res).removeClass("menu4_"+res);
      $('.menu5_'+res).addClass("active");
      $('.menu5_'+res).removeClass("menu5_"+res);
      $('.menu6_'+res).addClass("active");
      $('.menu6_'+res).removeClass("menu6_"+res);
      
  });
  $('.open-menu').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('id');
    var res = id.slice(6);
    menuOpen(res);
    $('#menu6_'+res).hide();

  })
  $('.close-menu').on('click',function (e) {
    e.preventDefault();
    var id = $(this).attr('id');
    var res = id.slice(6);
    menuClose(res);
    $('#menu1_'+res).addClass("menu1_"+res);
    $('#menu1_'+res).removeClass("active");
    $('#menu2_'+res).addClass("menu2_"+res);
    $('#menu2_'+res).removeClass("active");
    $('#menu3_'+res).addClass("menu3_"+res);
    $('#menu3_'+res).removeClass("active");
    $('#menu4_'+res).addClass("menu4_"+res);
    $('#menu4_'+res).removeClass("active");
    $('#menu5_'+res).addClass("menu5_"+res);
    $('#menu5_'+res).removeClass("active");
    $('#menu6_'+res).addClass("menu6_"+res);
    $('#menu6_'+res).removeClass("active");
    setTimeout(hidingMenu,1000);
    function hidingMenu(){
      document.getElementById('menu1_'+res).style.display = "none";
      document.getElementById('menu2_'+res).style.display = "none";
      document.getElementById('menu3_'+res).style.display = "none";
      document.getElementById('menu4_'+res).style.display = "none";
      document.getElementById('menu5_'+res).style.display = "none";
      document.getElementById('menu6_'+res).style.display = "none";
    }


  })
  
 