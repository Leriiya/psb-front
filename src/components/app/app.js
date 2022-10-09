import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import { map } from "lodash";
import { routesConfig } from "../../getRoute/routeConfig";
import { useApp } from "./hooks";
import {
  ApolloClient,
  InMemoryCache,
  ApolloCache,
  HttpLink,
  from,
  ApolloProvider,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetContacts from "../apollo/getContacts";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Lera is the best ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://10.200.240.148:3000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export const App = () => {
  const { isAuth } = useApp();
  return (
    <ApolloProvider client={client}>
      <GetContacts />
      <Fragment>
        <Routes>
          {map(routesConfig, ({ path, element }, i) => (
            <Route path={path} element={element} key={i} />
          ))}
        </Routes>
      </Fragment>
    </ApolloProvider>
  );
};
