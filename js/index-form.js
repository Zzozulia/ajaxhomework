$('#submit-contact-form').click(function(ev){
   ev.preventDefault();
   $.ajax({
    url: "https://formspree.io/yulia.zeze@gmail.com", 
    method: "POST",
    data: {
        customerName: $('#customer-name').val(),
        customerEmail: $('#customer-email').val()
    },
    dataType: "json"
});
});