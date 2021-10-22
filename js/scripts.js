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

    if (career === "upstart") {
      ruby +=1;
    } else if (career === "plug") {
      csharp +=1;
    } else {
      script +=1;
    }

    if (complexity === "simple") {
      ruby +=1;
    } else if (complexity === "bring-it") {
      csharp +=1;
    } else {
      script +=1;
    }

    if (name === "smart") {
      csharp +=1;
    } else if (name === "symbol") {
      ruby +=1;
    } else {
      script +=1;
    }

    if (csharp > ruby && csharp > script) {
      $('#quiz').hide();
      $('#answer-csharp').show();
      $('#answer-ruby').hide();
      $('#answer-script').hide();
    } else if (ruby > csharp && ruby > script) {
      $('#quiz').hide();
      $('#answer-ruby').show();
      $('#answer-csharp').hide();
      $('#answer-script').hide();
    } else if (script > csharp && script > ruby) {
      $('#quiz').hide();
      $('#answer-script').show();
      $('#answer-csharp').hide();
      $('#answer-ruby').hide();
    } else {
      $('#tiebreaker').show();
    }
  });
});