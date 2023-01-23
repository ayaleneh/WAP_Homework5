window.onload = function () {
    let select = document.getElementById("animation");
    let output = document.getElementById("text-area");

    var currentFrame = 0;
    var animationSpeed = 250;
    let animationInterval;
    var animationFrames;
    
     document.getElementById("start").onclick = function () {
        animationInterval = setInterval(function () {
            output.textContent = animationFrames[currentFrame];
            currentFrame = (currentFrame + 1) % animationFrames.length;
            console.log("animation speed is22: " + animationSpeed);
        }, animationSpeed);
         document.getElementById("stop").disabled = false;

         console.log("animation speed is22: " + animationSpeed);
    }
    document.getElementById("stop").onclick = function () {
        console.log("stop is working");
        clearInterval(animationInterval);
    }
    document.getElementById("turbo").onclick = function () {
   
        if (document.getElementById("turbo").checked == true) {
            animationSpeed = 25;
           console.log("true");
        }
        else {
           console.log("false");
            animationSpeed = 250;
        }
    }


    select.addEventListener("change", function () {
        output.textContent = ANIMATIONS[this.value];
        animationFrames = ANIMATIONS[this.value].split("=====\n");
        //console.log("split method" + ANIMATIONS[this.value].length);
  
    })

}





