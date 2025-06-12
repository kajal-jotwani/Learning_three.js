// transforms the coordinates into the clip space coordinates
// uniform mat4 projectionMatrix; //used when using raw shader material

// apply transformations relative to the camera(position, rotation, field of view, near, far)
// uniform mat4  viewMatrix;
// apply transformation relative to the Mesh(position, rotaion, scale)
// uniform mat4 modelMatrix;

uniform vec2 uFrequency;
uniform float uTime;

// attribute vec2 uv;

// attribute vec3 position;
attribute float aRandom;

varying vec2 vUv;
varying float vElevation;
// varying float vRandom;

void main()
    {
        // vRandom = aRandom;
        vUv = uv;

        /*
        gl_FragColor is a special variable that holds the color of the
        fragment. It is a vec4, which means it has four components: red,
        green, blue, and alpha. Each component is a floating point number
        between 0.0 and 1.0. The default value is (0.0, 0.0, 0.0, 0.0).
  
         The following line sets the color of the fragment to red.
        */

        // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        // storing the wind elevation in a veriable to be updated in the fragment;
        float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
        elevation += sin(modelPosition.y * uFrequency.y -  uTime) * 0.1;

        modelPosition.z = elevation;

        // modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
        // modelPosition.z += sin(modelPosition.y * uFrequency.y -  uTime) * 0.1;


        // modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;  
        // modelPosition.z += aRandom * 0.1;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition;
        vElevation = elevation;

    }