//  set the progamed fadeIn and fadeOut ramps
function initializeRamps(){
  var opStep2 = (maxOpacity - minOpacity)/(endFade - startFade -1);
  for (var step = 0; step <= startFade; step++){
    fadeIn[step] = minOpacity;
    fadeOut[step] = maxOpacity;
  }
  for (step = startFade + 1; start < endFade; step++){
    fadeIn[step] = minOpacity + opStep2 * (step - startFade);
    fadeOut[step] = maxOpacity - opStep2 * (step - startFade);
    }

  for (step = edFade; step <= fadeStepsTot; step++){
    fadeIn[step] = maxOpacity;
    fadeOut[step] = minOpacity;
  }
}
