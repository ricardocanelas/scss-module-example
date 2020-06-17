import clsx from "clsx";

export default function mapPropsToStyles(
  props = {},
  styles = {},
  className = ""
) {
  const mappedClassNames = Object.entries(props).reduce(
    (acc, [prop, value]) => {
      let className = "";
      let type = typeof value;

      if (type === "boolean") className = prop;
      if (type === "string") className = `${prop}-${value}`;

      if (className === "" || typeof styles[className] === "undefined")
        return acc;

      return { ...acc, [styles[className]]: value ? true : false };
    },
    {}
  );

  return clsx(styles.root, mappedClassNames, className);
}
