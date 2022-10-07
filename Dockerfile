FROM openjdk:17

LABEL maintainer="test@neuefische.de"

ADD backend/target/movies66.jar movies66.jar

CMD ["sh", "-c", "java -DServer.port=$PORT -jar /movies66.jar"]