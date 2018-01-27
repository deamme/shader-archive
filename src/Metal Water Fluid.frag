// Author: Deam
// Title: Metal Wave Fluid
// Date: 27/1/2018
// Inspired by: https://www.shadertoy.com/view/XsXXDn

#ifdef GL_ES
#define t u_time
#define r u_resolution
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
	vec3 c;
	float l;
	for(int i=0; i < 3; i++) {
		vec2 uv, p = gl_FragCoord.xy/r;
		p -= 0.5;
		p.x *= r.x/r.y;
		l = length(p);
		c[i] = 0.01 / length(p + abs(sign(t)) * abs(sin(l*24. - t*2.)) * vec2(0.250,0.250));
	}
	gl_FragColor = vec4(c/l, t);
}
