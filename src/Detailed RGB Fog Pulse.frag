// Author: Deam
// Title: Detailed RGB Fog Pulse
// Date: 27/1/2018

#ifdef GL_ES
#define t u_time
#define r u_resolution
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 param = vec2(1.7,0.5);
	vec3 c;
	float l, z = t;
	for(int i=0; i < 3; i++) {
		vec2 uv, p = gl_FragCoord.xy/r;
		uv = p;
		p -= 0.5;
		p.x *= r.x/r.y;
		z += 0.03; // RGB offset
		l = length(p);
		uv += sin(l*12.*param - z*2.4*param);
		c[i] = 0.01 / length(uv*0.5);
	}
	gl_FragColor = vec4(c/l, t);
}
