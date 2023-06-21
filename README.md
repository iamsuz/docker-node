#Installation Guide

npm install

If you want to run with the docker run the `docker compose -f docker-compose.dev.yml up`

This repo exist of conversion of 
FBX => GLB
FBX => OBJ

Obj => GLB/GLTF

    While converting to GLB/GLTF you can provide options where you can add texture and materials

    Traditionally the .mtl file format describes the Blinn-Phong shading model. Meanwhile glTF 2.0 introduces physically-based materials.

    There are three shading models supported by obj2gltf:
    
        Metallic roughness PBR
        Specular glossiness PBR (via KHR_materials_pbrSpecularGlossiness extension)
        Unlit materials (via KHR_materials_unlit extension)
    
    If the material type is known in advance, it should be specified with either the metallicRoughness or specularGlossiness flag.
    
    If lighting information is already present in the model, the unlit flag should be used. This will save the glTF with the KHR_materials_unlit extension.
    
    If the model is created with PBR textures, either the metallicRoughness or specularGlossiness flag should be passed in. See the table below for more information about how to specify PBR values inside the .mtl file.
    
    If none of these flags are provided, the .mtl is assumed to contain traditional Blinn-Phong materials which will be converted to metallic-roughness PBR. There may be some quality loss as traditional materials do not map perfectly to PBR materials.
    
    Commonly in PBR workflows the the .mtl file may not exist or its values may be outdated or incorrect. As a convenience the PBR textures may be supplied directly to the command line.

GLB/GLTF => OBJ
