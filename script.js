function input(){
      var ids = []
      var input = document.querySelectorAll("input")
        for(var i = 0; i < input.length; i++){
        var id = input[i].id
        ids.unshift(id)
      }
      function value(){
        
      }
    return [ids, ]
  }  
  
  function elements(){
  // box element
  var boxElem = document.querySelector(".box")
  // slider input
  var inputElem = document.querySelector("#slider-whole")
  // text field showing its element's value
  var textElem = document.querySelector("#text > p")
  return [boxElem, inputElem, textElem]
}

  function setting(items){
  var boxElem = items[0]
  var inputElemValue = items[1].value
  console.log(inputElemValue)
  var textElem = document.querySelector("#text > p") 
  console.log(textElem)
  console.log(items[2].innerText)
  return inputElemValue
  }
  
  function radiusMaker(element, style){
  element.setAttribute("style", style) 
  }

  function borderType(value, side, direction){
   const styleFull = `border-radius: ${value}px;`
   const styleSide = `border-${side}-${direction}-radius: ${value}px;`
   
   return [styleFull, styleSide]
  }
  

function updater(){
  var side;
  var direction;
  var items = elements()
  var boxElem = items[0]
  var radiusSize = setting(items)
  var styleFull = borderType(radiusSize)
  var styleSide = borderType(radiusSize, side, direction)
  var borderFull = styleFull
  var borderSide = styleSide
  // border-radius all sides
  radiusMaker(boxElem, borderFull)
  // border-radius each side
  radiusMaker(boxElem, borderSide)
  }

// top

function updaterTLT(){
  var side = "top"
  var direction = "left"
  var box = document.querySelector(".box")
  var input = document.querySelector(`#slider-${side}-${direction}`)
  var text = document.querySelector(`#text-${side}-${direction} > p`)
  var inputValue = input.value
  text.innerText = inputValue
  var style = `border-${side}-${direction}-radius: ${inputValue}px;`  
  box.setAttribute("style", style)  
}

function updaterTRT(){
  var side = "top"
  var direction = "right"
  var box = document.querySelector(".box")
  var input = document.querySelector(`#slider-${side}-${direction}`)
  var text = document.querySelector(`#text-${side}-${direction} > p`)
  var inputValue = input.value
  text.innerText = inputValue
  var style = `border-${side}-${direction}-radius: ${inputValue}px;`  
  box.setAttribute("style", style)  
}
// bottom 

function updaterBTLT(){
  var side = "bottom"
  var direction = "left"
  var box = document.querySelector(".box")
  var input = document.querySelector(`#slider-${side}-${direction}`)
  var text = document.querySelector(`#text-${side}-${direction} > p`)
  var inputValue = input.value
  text.innerText = inputValue
  var style = `border-${side}-${direction}-radius: ${inputValue}px;` 
  box.setAttribute("style", style)  
}

function updaterBTRT(){
  var side = "bottom"
  var direction = "right"
  var box = document.querySelector(".box")
  var input = document.querySelector(`#slider-${side}-${direction}`)
  var text = document.querySelector(`#text-${side}-${direction} > p`)
  var inputValue = input.value
  text.innerText = inputValue
  var style = `border-${side}-${direction}-radius: ${inputValue}px;` 
  box.setAttribute("style", style)  
}
