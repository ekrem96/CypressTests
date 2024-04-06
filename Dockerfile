FROM cypress/browsers

WORKDIR /tests

COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
COPY ./results ./results

RUN npm install

ENTRYPOINT [ "npx", "cypress", "run" ]