import clsx from "clsx";
import { useRef, useState } from "react";

const Expandable = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const scrollToElement = () => {
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const elementTop = rect.top + scrollTop;
    const paddingTop = 100;

    window.scrollTo({
      top: elementTop - paddingTop,
      behavior: "smooth",
    });
  };

  const toggleExpand = () => {
    if (expanded) scrollToElement();
    setExpanded(!expanded);
  };

  const styles = {
    collapsed: {
      height: "200px",
      WebkitMaskImage: `linear-gradient(rgba(0, 0, 0, 1) 65%, transparent 100%)`,
      maskImage: `linear-gradient(rgba(0, 0, 0, 1) 65%, transparent 100%)`,
    },
    expanded: {
      height: "auto",
    },
  };

  return (
    <div ref={containerRef} className="nx-mt-4 nx-mb-12 nx-relative">
      <div
        className={clsx("nx-w-full nx-overflow-hidden")}
        style={expanded ? styles.expanded : styles.collapsed}
      >
        {children}
      </div>

      <button
        onClick={toggleExpand}
        style={{ bottom: "0", marginTop: "-1.35em" }}
        className={clsx(
          "nx-sticky nx-absolute nx-w-full nx-text-center nx-left-0",
          "nx-uppercase nx-text-sm"
        )}
      >
        <span
          style={{ top: expanded ? "-2em" : "-1.5em" }}
          className={clsx(
            "nx-relative nx-px-4 nx-py-2 nx-text-primary-800 nx-inline-block",
            "nx-bg-primary-100 dark:nx-bg-primary-400/10 nx-font-semibold nx-rounded"
          )}
        >
          {expanded ? "Collapse" : "Expand"}
        </span>
      </button>
    </div>
  );
};

export default Expandable;
