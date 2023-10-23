
  import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:18080/auth/' ,
        realm: 'gestion-ecole',
        clientId: 'angular-web-client',
      },
      loadUserProfileAtStartUp: true,
      initOptions: {

        onLoad: 'login-required',
        checkLoginIframe: true,

      }
 
    });
}