package org.example.beautybooking;

import org.springframework.http.*;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@Service
public class GoogleCalendarService {
    private final RestTemplate restTemplate;
    private static final String CALENDAR_API_URL = "https://www.googleapis.com/calendar/v3/calendars/primary/events";

    public GoogleCalendarService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String addEvent(
            OAuth2AccessToken accessToken,
            String summary,
            OffsetDateTime startDateTime,
            OffsetDateTime endDateTime
    ) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken.getTokenValue());
        headers.setContentType(MediaType.APPLICATION_JSON);

        DateTimeFormatter formatter = DateTimeFormatter.ISO_OFFSET_DATE_TIME;
        String startDateTimeStr = startDateTime.format(formatter);
        String endDateTimeStr = endDateTime.format(formatter);

        Map<String, Object> eventDetails = new HashMap<>();
        eventDetails.put("summary", summary);
        eventDetails.put("start", Map.of("dateTime", startDateTimeStr, "timeZone", "UTC"));
        eventDetails.put("end", Map.of("dateTime", endDateTimeStr, "timeZone", "UTC"));

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(eventDetails, headers);

        ResponseEntity<Map> response = restTemplate.exchange(
                CALENDAR_API_URL,
                HttpMethod.POST,
                entity,
                Map.class
        );

        if (response.getStatusCode() == HttpStatus.OK || response.getStatusCode() == HttpStatus.CREATED) {
            return "Created";
        } else {
            throw new RuntimeException("Failed to add event: " + response.getStatusCode());
        }
    }
}
