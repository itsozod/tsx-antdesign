export const UseSelectTheme = (theme: string) => {
  switch (theme) {
    case "Violet":
      return "blueviolet";
    case "Green":
      return "green";
    case "Red":
      return "red";
    case "Blue":
      return "blue";
    default:
      return "black";
  }
};

// export const MyTheme = () => localStorage.getItem("theme") || "Green";
