varying vec2 vUv;

void main()
{
    float strength = step(0.8, mod(vUv.y * 10.0, 1.0));
    // when you multiply You only get 1.0 if both conditions are true.
    // So only the intersections of thin vertical and horizontal stripes are white (1.0).
    // Everywhere else becomes black (0.0).
    strength *= step(0.8, mod(vUv.x * 10.0, 1.0));
    gl_FragColor = vec4(vec3(strength), 1.0); 
}