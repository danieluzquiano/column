t=s=mx=my=100000
setup=_=>{
  createCanvas(w = windowWidth, h = windowHeight)
  mx = random(w);
  my = random(h);
}
draw=_=> {
      background(w)
      strokeWeight(.01)
      translate(w / 2, h/ 2)
      scale(100)
      n = map(mx, 0, w, 2.5, -2.5)
      m = map(my, 0, h, 2.5, -2.5)
    for (a = 0; a<3.5; a+=.0004)
        x = a*s*n,
        y = a%tan(x+s)+m,
        e = 1.75*cos(x*s),
        circle(noise(cos(y+t)+m)*e,tan(sin(y+n+m)+m/s),0.008);
    //t+=w/(s/4);
    t+=.03;
    s+=.003
  }

mousePressed=_=> {
  mx = mouseX;
  my = mouseY;
}

mouseMoved=_=> {
  mx = mouseX;
  my = mouseY;
}

touchStarted=_=> {
  mx = mouseX;
  my = mouseY;
}

touchMoved=_=> {
  mx = mouseX;
  my = mouseY;
  return false;
}

//#つぶやきProcessing #p5js