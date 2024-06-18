FROM gradle:jdk21 AS build
WORKDIR /backend
COPY . /backend
RUN chmod +x ./gradlew && \
    ./gradlew build


FROM openjdk:21
WORKDIR /backend
COPY --from=build /backend/build/libs/beauty-booking-0.0.1-SNAPSHOT.jar ./beauty-booking.jar
CMD [ "java", "-jar", "beauty-booking.jar" ]
