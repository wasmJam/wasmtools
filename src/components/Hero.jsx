import React from "react";
import kubetools from "../assets/wasmtools.png";
import Button from "./Button";
function Hero() {
  return (
    <div className="bg-bgPrimary w-full px-6 py-6  max-w-4xl mx-auto">
      <div className="flex flex-col  items-center gap-6 p-5 md:p-8 rounded-xl bg-bgGray">
        <div>
          <img src={kubetools} alt="" className="md:w3/4 rounded-xl" />
        </div>
        <div>
          <div>
            <h1 className="text-primary text-[28px] md:text-4xl ">
            Ultimate Collection Of WebAssembly (WASM) Toolkit
            </h1>
            <h3 className="text-grayFill md:text-xl">
              Submit Your Favourite WASM Tool
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-5 mt-4">
              <Button text={"Submit Tool"} link={"https://github.com/wasmJam/wasmtools/blob/main/src/data/entries.js"} />
              <Button text={"Github"} link={"https://github.com/wasmJam/wasmtools"} />
              <Button
                text={"Join Us on Discord"}
                link={"https://discord.com/invite/rEvr7vq"}
              />
              <Button text={"The Complete WebAssembly Course"} link={"https://youtu.be/eYekV2Do0YU"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
