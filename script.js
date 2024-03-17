for (i=99; i>=1; i--){
    display.innerHTML += `<p>${i} biscuits in a box, ${i} biscuits.</p> <p style="margin-bottom: 30px;">Take out one and pass it around, ${--i} biscuits in the box. </p>`
    console.log(i);
} 
display.innerHTML += `<p style="margin-top: 30px;">No more biscuits in the box, no more biscuits.</p> <p>Go to the store and buy more biscuits, 99 biscuits in a box.</p>`