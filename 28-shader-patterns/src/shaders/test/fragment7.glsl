varying vec2 vUv;

void main()
{
    float strength = mod(vUv.y * 10.0, 1.5);
    gl_FragColor = vec4(vec3(strength), 1.0); 
}