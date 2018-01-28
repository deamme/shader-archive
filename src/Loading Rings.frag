// Author: Deam
// Title: Loading Rings
// Date: 28/1/2018

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  st.x *= u_resolution.x/u_resolution.y;
  float d = 0.0;
  st = st * 10.-5.;
  
  // Rotate Cartesian coordinate system
  st = rotate2d( u_time*3.14*2. ) * st;
	
  // Distance field
  d = length( abs(st)-abs(sin(u_time)+2.));
  gl_FragColor = vec4(vec3(smoothstep(.3,.4,d)*smoothstep(.6,.5,d)) ,1.0);
  
  // Visualize the distance field
  //gl_FragColor = vec4(vec3(fract(d*1.)),1.);
}
