const prismaErrorCodeHandler = (code: string) => {
  switch (code) {
    case "P2002":
      // handling duplicate key errors
      return String(`Duplicate field value`);
    case "P2014":
      // handling invalid id errors
      return String(`Invalid ID`);
    case "P2003":
      // handling invalid data errors
      return String(`Invalid input data`);
    default:
      // handling all other errors
      return String(`Something went wrong`);
  }
};

export default prismaErrorCodeHandler;
