//complete working code that will sleep for 100 milliseconds and then output the time difference (which should be around 100 milliseconds):
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
  }
  
  /** 
   * Example usage
   */
  let t = Date.now();
  sleep(100).then(() => console.log(Date.now() - t)); // This should print approximately 100 milliseconds