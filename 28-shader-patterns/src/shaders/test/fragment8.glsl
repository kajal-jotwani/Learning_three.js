varying vec2 vUv;

void main()
{
    float strength = mod(vUv.y * 10.0, 1.5);
    // if else is bad for performances prefer not to use
    // if(strength < 0.5){
    //     strength = 0.0;
    // }
    // else{
    //     strength = 1.0;
    // }
    // strength = strength < 0.5 ? 0.0 : 1.0;
    
    strength = step(0.5, strength);
    gl_FragColor = vec4(vec3(strength), 1.0); 
}