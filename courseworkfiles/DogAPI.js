

fetch("http://dog.ceo/api/breeds/list").then(function(resp) {
  return resp.json()
}).then(function(response) {
  document.getElementById("breedcontainer")
    .innerHTML= "<select class='selectpicker' id='selector'>"
    + response.message
    .map(breed => "<option value='"+breed+"'>"+breed+"</option>")
    .reduce((accum,current) => accum+current)
    + "</select>"

})

function handleButtonClick (event) {
  var sel = document.getElementById("selector")
  var val = sel.options[sel.selectedIndex].value;
  fetch("http://dog.ceo/api/breed/"+val+"/images/random").then(resp => {
    return resp.json()
  }).then(response => {
      console.log(response)
      document.getElementById("doggo1").innerHTML='<img src="'+response.message+'">'
  })
  fetch("http://dog.ceo/api/breed/"+val+"/images/random").then(resp => {
    return resp.json()
  }).then(response => {
      console.log(response)
      document.getElementById("doggo2").innerHTML='<img src="'+response.message+'">'
  })
  fetch("http://dog.ceo/api/breed/"+val+"/images/random").then(resp => {
  return resp.json()
  }).then(response => {
    console.log(response)
    document.getElementById("doggo3").innerHTML='<img src="'+response.message+'">'
  })
  // var img = document.getElementById("doggo1").firstchild
  // img.style.maxWidth="100%"
  // img.style.maxHeight="100%"
  // var img = document.getElementById("doggo2").firstchild
  // img.style.maxWidth="100%"
  // img.style.maxHeight="100%"
  // var img = document.getElementById("doggo3").firstchild
  // img.style.maxWidth="100%"
  // img.style.maxHeight="100%"
}

  document.getElementById("show")
     .addEventListener('click', handleButtonClick)
