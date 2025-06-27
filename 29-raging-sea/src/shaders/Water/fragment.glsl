uniform vec3 uDepthColor;
uniform vec3 USurfaceColor;
varying float vElevation;
uniform float uColorOffSet;
uniform float uColorMultiplier;

void main()
{
    float mixStrength = (vElevation + uColorOffSet) * uColorMultiplier;
    vec3 color = mix(uDepthColor, USurfaceColor, mixStrength);
    gl_FragColor = vec4(color, 1.0);
}
