const {obj2gltf} = require("obj2gltf");
const fs = require("fs");

/**
 * Traditionally the .mtl file format describes the Blinn-Phong shading model. Meanwhile glTF 2.0 introduces physically-based materials.

There are three shading models supported by obj2gltf:

    Metallic roughness PBR
    Specular glossiness PBR (via KHR_materials_pbrSpecularGlossiness extension)
    Unlit materials (via KHR_materials_unlit extension)

If the material type is known in advance, it should be specified with either the metallicRoughness or specularGlossiness flag.

If lighting information is already present in the model, the unlit flag should be used. This will save the glTF with the KHR_materials_unlit extension.

If the model is created with PBR textures, either the metallicRoughness or specularGlossiness flag should be passed in. See the table below for more information about how to specify PBR values inside the .mtl file.

If none of these flags are provided, the .mtl is assumed to contain traditional Blinn-Phong materials which will be converted to metallic-roughness PBR. There may be some quality loss as traditional materials do not map perfectly to PBR materials.

Commonly in PBR workflows the the .mtl file may not exist or its values may be outdated or incorrect. As a convenience the PBR textures may be supplied directly to the command line.
 */

const options = {
  binary: true,
};

const objToGltf = (file, options) =>{
    let data
    obj2gltf(file).then(function (gltf) {
    data = Buffer.from(JSON.stringify(gltf));
    fs.writeFileSync("model.gltf", data);
    });
    return data
}

const objToGlb = (file, options) =>{
    let data
    obj2gltf(file, options).then(function (glb) {
        data = glb
        fs.writeFileSync("model.glb", glb);
    });
    return data
}


module.exports = {
    objToGltf,
    objToGlb
}
