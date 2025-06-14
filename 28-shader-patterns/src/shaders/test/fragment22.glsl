varying vec2 vUv;

void main()
{
    float alongX = floor(vUv.x * 10.0) / 10.0;
    float alongY = floor(vUv.y * 10.0) / 10.0;
    float strength = alongX * alongY;

    gl_FragColor = vec4(vec3(strength), 1.0); 
}