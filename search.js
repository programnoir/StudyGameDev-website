/*https://codepen.io/chrismccoy/pen/ogNMXY*/
$(document).ready(function()
{
 function keyword_index_filter(elem)
 {
  var value = $(elem).val().toLowerCase();
  $(".lc").each(function()
  {
   if( $(this).text().toLowerCase().search(value) > -1 )
   {
    $(this).removeClass('hidden');
   }
   else
   {
    $(this).addClass('hidden');
   }
  });

  $(".xc").each(function()
  {
   if( $("#search").val() == "" )
   {
    $(this).removeClass('hidden');
   }
   else
   {
    $(this).addClass('hidden');
    var show = false;
    var kids = this.getElementsByClassName("lc");
    for( var i = 0; i < kids.length; i++ )
    {
     if( kids[i].classList.contains('hidden') == false )
     {
      show = true;
      i = kids.length;
     }
    }
    if( kids.length > 0 && show )
    {
     $(this).removeClass('hidden');
    }
   }
  });


  $(".topic").each(function()
  {
   if( $("#search").val() == "" )
   {
    $(this).removeClass('hidden');
   }
   else
   {
    $(this).addClass('hidden');
    var show = false;
    var kids = this.getElementsByClassName("xc");
    for( var i = 0; i < kids.length; i++ )
    {
     if( kids[i].classList.contains('hidden') == false )
     {
      show = true;
      i = kids.length;
     }
    }
    if( kids.length > 0 && show )
    {
     $(this).removeClass('hidden');
    }
   }
  });
 }
 $('#search').on('keyup', function()
 {
  keyword_index_filter(this);
 });
});
