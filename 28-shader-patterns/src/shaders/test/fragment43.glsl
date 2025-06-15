#define PI 3.14159265359
varying vec2 vUv;

void main()
{
    float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    angle /= PI * 2.0;
    angle += 0.5;
    float strength = sin(angle * 100.0);
    gl_FragColor = vec4(vec3(strength), 1.0); 
}