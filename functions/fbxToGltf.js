const fs = require('fs');
// const FBXLoader = require('three/jsm/loaders/FBXLoader');
// const { GLTFExporter } = require('three/jsm/exporters/GLTFExporter');

// Load the FBX file and export as glTF
async function toGltf(fbxFilePath) {
    const convert = require('fbx2gltf');
    convert(fbxFilePath, 'path/to/target.glb', ['--khr-materials-unlit']).then(
        destPath => {
            // yay, do what we will with our shiny new GLB file!
            console.log(destPath)
        },
        error => {
            // ack, conversion failed: inspect 'error' for details
            console.error(error)
        }
    );
}

// // Specify the paths for input FBX and output glTF files
// const fbxFilePath = 'input.fbx';
// const gltfFilePath = 'output.gltf';

// fbxToGltf(fbxFilePath, gltfFilePath);

module.exports = {
    toGltf
}
