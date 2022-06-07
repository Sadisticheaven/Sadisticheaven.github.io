// (function () {
//     var imgshow = document.getElementById("img_show"),
//         imgcontent = document.getElementById("img_content"),
//         imglist = document.querySelectorAll(".article .content img");
//     function show(src) {
//         imgcontent.setAttribute("src", src);
//         imgshow.style.display = "flex";
//         setTimeout(function () {
//             imgshow.style.opacity = 1;
//         }, 5);
//     }
//     function hide() {
//         imgshow.style.opacity = 0;
//         setTimeout(function () {
//             imgshow.removeAttribute("style");
//             document.body.removeAttribute("style");
//         }, 250);
//     }
//     for (var img of imglist)
//         img.addEventListener("click", function () {
//             show(img.getAttribute("src"));
//         });
//     imgshow.addEventListener("click", function () {
//         hide();
//     });
//     window.addEventListener("resize", function () {
//         hide();
//     });
// })();

$(document).ready(function() {
    $('img').each(function() {
      if ($(this).parent().hasClass('fancybox')) return;
      if ($(this).hasClass('nofancybox')) return;
      var alt = this.alt;
    //   if (alt) $(this).after('<span class="caption">' + alt + '</span>');
      $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" title="' + alt + '" class="fancybox"></a>');
    //   $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" class="fancybox"></a>');

    });
    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article');
    });
  });
  $(document).ready(function() {
    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr('rel', 'gallery').fancybox({
      helpers : {
      title: { type: 'inside'}
      }
    });
});
