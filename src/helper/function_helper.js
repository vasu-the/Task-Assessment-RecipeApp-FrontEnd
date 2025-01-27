export const GET_ALL_COLORS = (type) => {
  switch (type) {
    case "Easy":
      return "!text-green-500";
    case "Medium":
      return "!text-sky-500";
    case "Hard":
      return "!text-red-500";
  }
};
