const AuthService = (domain) => {
  const login = (email, password) => {
    // Get a token
    return fetch(`${domain}/api/token`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        setToken(res);
        return fetch(`${domain}/api/user`, {
          method: "GET",
        });
      })
      .then((res) => {
        setProfile(res);
        return Promise.resolve(res);
      });
  };

  const loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = getToken();
    // return !!token && !isTokenExpired(token) // handwaiving here
    return !!token; // handwaiving here
  };

  const setProfile = (profile) => {
    // Saves profile data to localStorage
    localStorage.setItem("profile", JSON.stringify(profile));
  };

  const getProfile = () => {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem("profile");
    return profile ? JSON.parse(localStorage.profile) : {};
  };

  const setToken = (tokenResponse) => {
    // Saves user token to localStorage
    localStorage.setItem("id_token", tokenResponse.accessToken);
    localStorage.setItem("token", tokenResponse.token);
  };

  const getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  };

  const logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    localStorage.removeItem("profile");
  };

  const _checkStatus = (response) => {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      // error.response = response
      throw error;
    }
  };

  const fetch = (url, options) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (loggedIn()) {
      headers["Authorization"] = "Bearer " + getToken();
    }

    return fetch(url, {
      headers,
      ...options,
    })
      .then(_checkStatus)
      .then((response) => response.json());
  };
};

export default AuthService;
