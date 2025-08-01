import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Make sure to import ScrollTrigger if you're using it

gsap.registerPlugin(ScrollTrigger);

const WarpedText = () => {
  useEffect(() => {
    const warpTextSection = document.querySelectorAll(
      ".sk__cta-warp:not(.not-animated)"
    );

    if (warpTextSection.length) {
      if (!isMobile) {
        document
          .querySelectorAll(
            ".sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper"
          )
          .forEach((wrapper) => {
            let classnameL = "";
            let classnameR = "";
            let distance = 1;
            let n = 1;
            while (n < 6) {
              classnameL = "warped-text-clone-l" + n;
              classnameR = "warped-text-clone-r" + n;
              wrapper.cloneNode(true).classList.add(classnameL);
              wrapper.cloneNode(true).classList.add(classnameR);
              wrapper.parentNode.insertBefore(wrapper.cloneNode(true), wrapper);
              wrapper.parentNode.insertBefore(wrapper.cloneNode(true), wrapper);
              n++;
            }
          });

        const warpTextOriginalElement = document.querySelector(
          '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper:not([class*="clone"]) .sk__warped-text'
        );
        if (warpTextOriginalElement) {
          warpTextOriginalElement.classList.add("sk__gradient-fancy-text");

          gsap.to(
            '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper:not([class*="clone"])',
            {
              opacity: 1,
              ease: "power1.out",
              duration: 1.2,
              scrollTrigger: {
                trigger: '.sk__warped-text-wrapper:not([class*="clone"])',
                toggleActions: "play play reverse reverse",
                start: "top 80%",
                end: "top 50%",
                scrub: false,
              },
            }
          );

          let warpTextOriginalElementTL = gsap.timeline({
            scrollTrigger: {
              trigger: warpTextSection,
              start: "top 80%",
              toggleClass: {
                targets: warpTextOriginalElement,
                className: "deblur",
              },
            },
          });

          gsap.to(
            '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper[class*="warped-text-clone"]',
            {
              x: 0,
              opacity: 0,
              ease: "power1.out",
              duration: 1.2,
              scrollTrigger: {
                trigger: '.sk__warped-text-wrapper:not([class*="clone"])',
                toggleActions: "play play reverse reverse",
                start: "top 80%",
                end: "top 50%",
                scrub: false,
              },
            }
          );

          let warpedTextColorTL = gsap.timeline({
            scrollTrigger: {
              trigger:
                '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper:not([class*="clone"])',
              start: "top 80%",
              toggleClass: {
                targets: ".sk__cta-warp:not(.not-animated) .sk__warped-text",
                className: "sk__warped-text-color-changed",
              },
            },
          });
        }

        let warpedTexth3 = document.querySelector(".sk__cta-warp h3");
        if (warpedTexth3) {
          let warpedTexth3TL = gsap.timeline({
            scrollTrigger: {
              trigger:
                '.sk__cta-warp:not(.not-animated) .sk__warped-text-wrapper:not([class*="clone"])',
              start: "top 80%",
              toggleClass: {
                targets: ".sk__cta-warp:not(.not-animated).sk__cta-warp h3",
                className: "sk__cta-warp-h3-unspaced",
              },
            },
          });
        }

        let warpedTextButton = document.querySelector(".btn.sk__warped-button");
        if (warpedTextButton) {
          gsap.fromTo(
            warpedTextButton,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              delay: 0.65,
              ease: "power1.out",
              duration: 0.3,
              scrollTrigger: {
                trigger: '.sk__warped-text-wrapper:not([class*="clone"])',
                toggleActions: "play play reverse reverse",
                start: "top 80%",
              },
            }
          );
        }
      } else {
        document
          .querySelectorAll(".sk__warped-text-wrapper")
          .forEach((element) => {
            element.style.opacity = "1";
          });
        document
          .querySelectorAll(".sk__warped-text-wrapper .sk__warped-text")
          .forEach((element) => {
            element.classList.add("sk__gradient-fancy-text", "deblur");
          });
        document
          .querySelector(".sk__cta-warp h3")
          .classList.add("sk__cta-warp-h3-unspaced");
        document.querySelector(".btn.sk__warped-button").style.opacity = "1";
      }
    }
  }, []);

  return <div />;
};

export default WarpedText;
