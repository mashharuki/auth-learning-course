package org.example.beautybooking;

import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calendar")
public class CalendarController {
    private final GoogleCalendarService googleCalendarService;
    private final OAuth2AuthorizedClientService authorizedClientService;

    public CalendarController(GoogleCalendarService googleCalendarService, OAuth2AuthorizedClientService authorizedClientService) {
        this.googleCalendarService = googleCalendarService;
        this.authorizedClientService = authorizedClientService;
    }

    @PostMapping("/events")
    public String addEvent(
            OAuth2AuthenticationToken authentication,
            @RequestBody EventRequest eventRequest
    ) {
        OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(authentication.getAuthorizedClientRegistrationId(), authentication.getName());
        return googleCalendarService.addEvent(
                authorizedClient.getAccessToken(),
                eventRequest.getSummary(),
                eventRequest.getStartDateTime(),
                eventRequest.getEndDateTime()
        );
    }
}
