// Author: Deam
// Title: RGB Square Morphing
// Date: 27/9/2018

#ifdef GL_ES
#define t time
#define r resolution
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

void main() {
	vec3 c;
	float l, z = t;
	for(int i=0; i < 3; i++) {
		vec2 uv, p = gl_FragCoord.xy/r;
		uv = p;
		p -= 0.5;
		p.x *= r.x/r.y;
		z += -1000.; // RGB offset
		p *= sin(p*10. - z*2.4);
		c[i] = 0.01 / length(p);
	}
    
	gl_FragColor = vec4(c/0.5, 1.);
}
