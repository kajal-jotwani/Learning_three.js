/*
vec2 rotate(vec2 uv, float angle, vec2 pivot) {
    float s = sin(angle);
    float c = cos(angle);
    uv -= pivot;
    uv = mat2(c, -s, s, c) * uv;
    uv += pivot;
    return uv;
}
*/

#define PI 3.14159265359
varying vec2 vUv;

vec2 rotate(vec2 uv, float rotation, vec2 mid){
    return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

void main()
{
    vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));

    vec2 lightUvX = vec2(rotatedUv.x * 0.1 + 0.45, rotatedUv.y * 0.5 + 0.25);
    float lightX = 0.015 / distance(lightUvX, vec2(0.5));

    vec2 lightUvY = vec2(rotatedUv.y * 0.1 + 0.45, rotatedUv.x * 0.5 + 0.25);
    float lightY = 0.015 / distance(lightUvY, vec2(0.5));

    float strength = lightX * lightY;
    gl_FragColor = vec4(vec3(strength), 1.0);
}
