export var fetchOk = api => {
  return fetch(...api)
    .then(checkStatus)
    .then(res => (res ? res : res.text().catch(err => Promise.reject(err))));
};
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json().then(res => {
      console.log("res", res);

      if (res.ErrorCode && res.ErrorMessage && res.ErrorDetails) {
        console.log("before throw");
        throw res;
      }
      console.log("after throw");
      return res;
    });
  } else {
    var error = { message: response.statusText };
    error.response = response;
    throw error;
  }
}
