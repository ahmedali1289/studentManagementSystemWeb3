function ErrorHandler(error) {
    console.log(error)
  if (error?.message?.match(/reverted with reason string '(.*)'/)) {
    const revertMessage = error?.message?.match(
      /reverted with reason string '(.*)'/
    )?.[1];
    const messageToaster = revertMessage?.split('"')?.[0];
    return messageToaster;
  }
  else{
    const messageToaster = error?.message
    return messageToaster;
  }
}

export default ErrorHandler;
