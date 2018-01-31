// Author: Deam
// Title: Wheel to Flower Circle
// Date: 31/1/2018
// Complex functions source:
// https://github.com/anvaka/pplay/blob/master/src/util/shaders/complex.glsl

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec2 c_to_polar(vec2 c) {
  return vec2(length(c), atan(c.y, c.x));
}

vec2 c_from_polar(float r, float theta) {
  return vec2(r * cos(theta), r * sin(theta));
}

vec2 c_pow(vec2 c, float e) {
  vec2 p = c_to_polar(c);
  return c_from_polar(pow(p.x, e), p.y*e);
}

void main(){
  vec2 p = gl_FragCoord.xy/u_resolution.xy;
  p -= 0.5;
  p *= 5.;
  for(int i = 0; i < 32; ++i) {
    if (length(p) > 2.) break;
    p = (p / c_pow(p, sin(u_time)*6.)+sin(u_time)*3.14);
  }

  gl_FragColor = vec4(length(p) * vec3(1./64., 1./32., 1./16.), 1.0);
}
