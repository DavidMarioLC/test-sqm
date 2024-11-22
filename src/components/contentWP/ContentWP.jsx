import { cn } from "@/lib/utils";
import parse, { domToReact } from "html-react-parser";

export const ContentWP = ({ content, className }) => {
  // custom tags with taildwindcss
  const options = {
    replace: (domNode) => {
      if (domNode.name === "p") {
        return (
          <p className="font-base mb-4 font-normal text-sqm-black">
            {domToReact(domNode.children, {
              replace: (childNode) => {
                if (childNode.name === "a") {
                  const { href, target } = childNode.attribs;
                  return (
                    <a
                      className="text-sqm-green underline underline-offset-2"
                      href={href}
                      target={target}
                    >
                      {domToReact(childNode.children)}
                    </a>
                  );
                }

                if (childNode.name === "img") {
                  const { src } = childNode.attribs;
                  return <img src={src} className="w-full max-w-[800px]" />;
                }
              },
            })}
          </p>
        );
      }

      if (domNode.name === "a") {
        return (
          <a
            className="text-sqm-green underline underline-offset-2"
            href={domNode.attribs.href}
            target={domNode.attribs.target}
          >
            {domToReact(domNode.children)}
          </a>
        );
      }

      if (domNode.name === "h1") {
        return (
          <h1 className="font-museosans text-4xl font-bold text-sqm-blue">
            {domToReact(domNode.children)}
          </h1>
        );
      }

      if (domNode.name === "h2") {
        return (
          <h2 className="font-museosans text-3xl font-bold text-sqm-blue">
            {domToReact(domNode.children)}
          </h2>
        );
      }

      if (domNode.name === "h3") {
        return (
          <h3 className="font-museosans text-2xl font-bold text-sqm-blue">
            {domToReact(domNode.children)}
          </h3>
        );
      }

      if (domNode.name === "h4") {
        return (
          <h4 className="font-museosans text-xl font-bold text-sqm-blue">
            {domToReact(domNode.children)}
          </h4>
        );
      }

      if (domNode.name === "h5") {
        return (
          <h5 className="font-museosans text-lg font-bold text-sqm-blue">
            {domToReact(domNode.children)}
          </h5>
        );
      }

      if (domNode.name === "h6") {
        return (
          <h6 className="font-museosans text-base font-bold text-sqm-blue">
            {domToReact(domNode.children)}
          </h6>
        );
      }

      if (domNode.name === "ul") {
        return (
          <ul className="list-disc font-montserrat text-base">
            {domToReact(domNode.children)}
          </ul>
        );
      }

      if (domNode.name === "ol") {
        return (
          <ul className="list-decimal font-montserrat text-base">
            {domToReact(domNode.children)}
          </ul>
        );
      }
    },
  };

  return (
    <section className={cn("font-montserrat", className)}>
      {parse(content, options)}
    </section>
  );
};
