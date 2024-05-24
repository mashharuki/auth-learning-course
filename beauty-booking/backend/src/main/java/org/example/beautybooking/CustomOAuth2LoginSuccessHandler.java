package org.example.beautybooking;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomOAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {
    private static final Logger logger = LoggerFactory.getLogger(CustomOAuth2LoginSuccessHandler.class);
    private final OAuth2AuthorizedClientService authorizedClientService;

    public CustomOAuth2LoginSuccessHandler(OAuth2AuthorizedClientService authorizedClientService) {
        this.authorizedClientService = authorizedClientService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        if (authentication instanceof OAuth2AuthenticationToken oauthToken) {
            String clientRegistrationId = oauthToken.getAuthorizedClientRegistrationId();

            OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(
                clientRegistrationId,
                oauthToken.getName()
            );

            if (authorizedClient != null) {
                String accessToken = authorizedClient.getAccessToken().getTokenValue();
                logger.info("Access Token: " + accessToken);
            }
        }

        response.sendRedirect("http://localhost:5173");
    }
}
