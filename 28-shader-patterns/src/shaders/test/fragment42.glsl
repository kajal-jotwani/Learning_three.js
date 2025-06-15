#define PI 3.14159265359
varying vec2 vUv;

void main()
{
    float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    angle /= PI * 2.0;
    angle += 0.5;
    angle *= 20.0;
    angle = mod(angle, 1.0);
    float strength = angle;
    gl_FragColor = vec4(vec3(strength), 1.0); 
}