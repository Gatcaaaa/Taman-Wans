import React from "react";
import { Typography } from "@material-tailwind/react";
function HeroSection16() {
  return (
    <>
      <div
        className="relative bg-no-repeat bg-center bg-cover pt-80 pb-64"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/30">
          <header className="p-24 w-full">
            <div className="grid mt-10 min-h-[40vh] max-h-[40rem] w-full max-w-[80vw] mx-auto place-items-center bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
              <section className="container px-2 text-center md:px-0">
                <Typography
                  variant="h1"
                  color="white"
                  className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl"
                >
                  Mencari anak kecil dan binatang? Pastinya ya di{" "}
                  <span className="text-deep-orange-700 leading-snug">
                    Taman Wanasutan Asri,{" "}
                  </span>
                  {""}
                  Terpecaya dalam merawat anak kecil dan binatang
                </Typography>
              </section>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default HeroSection16;
