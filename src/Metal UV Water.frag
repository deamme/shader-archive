// Author: Deam
// Title: Metal UV Water
// Date: 25/1/2018
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
	float l, z = t;
	for(int i=0; i < 3; i++) {
		vec2 uv, p = gl_FragCoord.xy/r;
		uv = p;
		p -= 0.5;
		p.x *= r.x/r.y;
		z += 0.07;
		l = length(p);
		uv += (abs(sin(z))) * abs(sin(l*24. - z*2.));
		c[i] = 0.01 / length(uv - sin(t));
	}
	gl_FragColor = vec4(c/l, t);
}
