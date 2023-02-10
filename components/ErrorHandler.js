function ErrorHandler(errorMap,error) {
  let errorMessage = errorMap?.default;
  Object.keys(errorMap)?.forEach((key) => {
    if (error?.message?.includes(key)) {
      errorMessage = errorMap?.[key];
      if (key === "reverted with reason string") {
        errorMessage += error?.message
          ?.match(/reverted with reason string '(.*)'/)?.[1]
          ?.split('"')?.[0];
      }
    }
  });
  return errorMessage;
}

export default ErrorHandler;
