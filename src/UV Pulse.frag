// Author: Deam
// Title: UV Pulse
// Date: 26/1/2018

#ifdef GL_ES
#define t u_time
#define r u_resolution
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
	vec3 c;
	float l, q, z = t;
	for(int i=0; i < 3; i++) {
		vec2 uv, p = gl_FragCoord.xy/r;
		uv = p;
		p -= .5;
		p.x *= r.x/r.y;
		z += .024;
		l = length(p-vec2(.5,.5)+(uv - vec2(cos(t)*.1, sin(t)*.1)));
		uv += sin(l*2.4 - z*1.2);
		c[i] = 0.01 / length(uv - vec2(.5+.33*sin(z),.5+.33*sin(z)));
	}
	gl_FragColor = vec4(c/l, t);
}
