// Author: Deam
// Title: RBG Swarm
// Date: 19/9/2018

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
		z += -100.; // RGB offset
		p += sin(p*10. - z*2.4);
		c[i] = 0.01 / length(p);
	}
    
	gl_FragColor = vec4(c/0.5, 1.);
}
