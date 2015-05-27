(function (global) {
  function getJoinedSegments(segments) {
    if(!segments.length) {
      return '';
    }

    return `/${segments.join('/')}`;
  }

  function getSubdomainedAppName(appName, suffix) {
    if(!appName) {
      return '';
    }

    if(!suffix) {
      return `${appName}.`
    }

    return `${appName}${suffix}.`;
  }

  function interfacesURLForEnv(env, appName, ...segments) {
    var baseURL;

    switch(env) {
      case 'production':
        baseURL = `https://${getSubdomainedAppName(appName)}planningcenteronline.com`;
        break;
      case 'staging':
        baseURL =  `https://${getSubdomainedAppName(appName, '-staging')}planningcenteronline.com`;
        break;
      case 'development':
        baseURL = `http://${getSubdomainedAppName(appName)}pco.dev`;
        break;
      case 'test':
        baseURL = `http://${getSubdomainedAppName(appName)}pco.test`;
        break;
      default:
        baseURL = `http://${getSubdomainedAppName(appName)}planningcenteronline.com`
        break;
    }

    return baseURL + getJoinedSegments(segments);
  }

  global.interfacesURLForEnv = (global.module || {}).exports = interfacesURLForEnv;
})(this);
