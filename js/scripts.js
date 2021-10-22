$(document).ready(function() {
  let csharp = 0; 
  let ruby = 0;
  let script = 0; 

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    let code = $("input:radio[name=code]:checked").val();
    let create = $("input:radio[name=create]:checked").val();
    let career = $("input:radio[name=career]:checked").val();
    let complexity = $("input:radio[name=complexity]:checked").val();
    let name = $("input:radio[name=name]:checked").val();

    if (code === "yes") {
      csharp +=1;
      ruby +=1;
      script +=1;
  } else {
      $('#everything').hide();
      $('#why-tho').show();
  }

    if (create === "big") {
      csharp +=1;
  } else if (create === "small") {
      ruby +=1;
  } else {
      script +=1;
  }