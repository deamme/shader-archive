// Author: Deam
// Title: Mandelbrot Heartbeat
// Date: 29/1/2018

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
	vec2 uv = gl_FragCoord.xy / u_resolution.xy;
	float scale = u_resolution.y / u_resolution.x;
	uv=((uv-0.5)*4.644);
	uv.y*=scale;
	uv.y+=0.0;
    
    uv = rotate2d( u_time*3.14*24. ) * uv;
 
	vec2 z = vec2(0.0, 0.0);
	vec3 c = vec3(0.0, 0.0, 0.0);
	float v;
 
	for(int i=0;(i<170);i++)
	{
 
		if(((z.x*z.x+z.y*z.y) >= 4.)) break;
		z = vec2(z.x*z.x - z.y*z.y, step(0.4, sin(u_time*2.))*z.y*z.x) + uv;
 
 
		if((z.x*z.x+z.y*z.y) >= 2.0)
		{
			c.b=float(i)/20.0;
			c.r=sin((float(i)/5.0));

		}
 
	}
 
	gl_FragColor = vec4(c,1.0);
}