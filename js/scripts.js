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
      csharp +=1;
    } else if (career === "plug") {
      ruby +=1;
    } else {
      script +=1;
    }

    if (complexity === "simple") {
      csharp +=1;
    } else if (complexity === "bring-it") {
      ruby +=1;
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
      $('#answer-csharp').show();
    } else if (ruby > csharp && ruby > script) {
      $('#bob-barker').show();
    } else if (script > csharp && script > ruby) {
      $('#bob-barker').show();
    } else {
      $('#tiebreaker').show();
    }
  });
});