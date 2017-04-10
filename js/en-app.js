!(function($) {
    $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            menu: '#navBar',
            afterLoad: function(anchorLink, index) {
                if (index == 3) {
                    if (typeof swiper == 'undefined') {
                        swiper = new Swiper('#three .swiper-container', {
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            autoplay: 8000,
                            autoplayDisableOnInteraction: false,
                            onAutoplay: function(swiper) {
                                swiperRun();

                            }
                        });

                    }
                }

                function swiperRun() {

                   

                        var $lists = $('#three .swiper-slide:nth-child(2) > ul li');
                        clearInterval(tid);
                        $lists.each(function(index, item) {

                            $(this).stop();
                            $(this).hide();
                        });
                        server();
                    
                   

                        $('.step').removeClass('stepMove');
                        setTimeout(function() {
                            $('.step').addClass('stepMove');
                        }, 10)
                    
                };
                $('.swiper-button-next').on('click', function(e) {
                    swiperRun();
                })
                $('.swiper-button-prev').on('click', function(e) {
                    swiperRun();
                })
            }
        });
    });
    $('.aircraft').on('click', function(e) {
             $.fn.fullpage.moveTo(2,1)
    });

    var f = $('#one .f');
    var fIndex = 0;
    var tid;

    function server() {
        var count = 0;
        var $lists = $('#three .swiper-slide:nth-child(2) > ul li');
        tid = setInterval(function() {
            $lists.eq(count++).fadeIn();
        }, 500)
    }

    function fRun(fIndex) {
        f.eq(fIndex).addClass('active').siblings('.f').removeClass('active');
    }
    var stop = setInterval(function() {
        fRun(fIndex);
        fIndex++;
        if (fIndex == f.length) fIndex = 0;
    }, 5000);
    f.on('mouseenter', function(e) {
        clearInterval(stop);
        var index = $(this).index();
        f.eq(index).addClass('active').siblings('.f').removeClass('active');
    }).on('mouseleave', function(e) {
        stop = setInterval(function() {
            fRun(fIndex);
            fIndex++;
            if (fIndex == f.length) fIndex = 0;
        }, 5000);
    });
    var tId = null;

    function type() {
        var s = '';
        var arr = ["responsive", "adorable", "experienced", "skillful", "contemporary", "modern", "dynamic", "vibrant", "productive", "creative", "adventurous", "different", "mobile-centric", "unprecedented", "unparalleled", "visual"];
        var con = $('#one h2 span');
        var index = 0;
        var i = 0;
        var length = s.length;

        function start() {
            con.text('');
            tId = setInterval(function() {
                con.append(arr[i].charAt(index));
                if (index++ == arr[i].length) {
                    clearInterval(tId);
                    index = 0;
                    i++;
                    if (i === arr.length) i = 0;
                    setTimeout(start, 1000);
                }
            }, 200);
        }
        start();
    };
    type();

    function trigngle() {
        var c1 = document.getElementById('c1');
        var cxt = c1.getContext('2d');
        c1.width = 420;
        c1.height = 622;

        function render() {
            cxt.beginPath();
            cxt.moveTo(0, 122);
            cxt.lineTo(284, 270);
            cxt.lineTo(30, 358);
            cxt.fillStyle = '#e9f8ff';
            cxt.closePath();
            cxt.fill();

            cxt.beginPath();
            cxt.moveTo(284, 270);
            cxt.lineTo(366, 0);
            cxt.lineTo(366, 321);
            cxt.fillStyle = '#d4f1ff';
            cxt.closePath();
            cxt.fill();

            cxt.beginPath();
            cxt.moveTo(408, 56);
            cxt.lineTo(420, 159);
            cxt.lineTo(366, 285);
            cxt.fillStyle = '#aae2ff';
            cxt.closePath();
            cxt.fill();

            cxt.beginPath();
            cxt.moveTo(30, 358);
            cxt.lineTo(366, 285);
            cxt.lineTo(204, 450);
            cxt.fillStyle = '#e9f8ff';
            cxt.closePath();
            cxt.fill();

            cxt.beginPath();
            cxt.moveTo(204, 450);
            cxt.lineTo(366, 285);
            cxt.lineTo(185, 622);
            cxt.fillStyle = '#e9f8ff';
            cxt.closePath();
            cxt.fill();

            cxt.beginPath();
            cxt.moveTo(204, 450);
            cxt.lineTo(366, 285);
            cxt.lineTo(366, 319);
            cxt.fillStyle = '#c3ebff';
            cxt.closePath();
            cxt.fill();
        }
        render();
    }
    trigngle();
    var angle = 0;

    function linearGradientBorder() {
        var dom = document.querySelector('#five .joinus');
        angle += 0.5;
        if (angle >= 360) {
            angle = 0;
        }
        dom.style.borderImage = 'linear-gradient(' + angle + 'deg, #c6cfd8, #10365b) 1 1 round';
    }
    var stop = setInterval(linearGradientBorder, Math.max(0, 16.7 - (new Date().getTime() - 0)));

    function airMove() {
        var $air = $('#one .aircraft');
        var tid = null;

        function start() {
            tid = setInterval(function() {
                $air.animate({
                    'bottom': 10
                });
                $air.animate({
                    'bottom': ''
                })
            }, 0)
        };
        //bind();
        /* function bind(){
            $air.on('mouseenter',function(e){
                clearInterval(tid);
                start();
            }).on('mouseleave',function(e){
                clearInterval(tid);
                $air.stop(true);
            })
        }
        */
        start()
    }
    airMove();
})(jQuery)
