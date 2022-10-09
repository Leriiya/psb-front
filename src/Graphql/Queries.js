import { gql } from "@apollo/client";

export const LOAD_CONTACTS = gql`
    query {
        user (_id: "63421adf741a7da5e476bde2"){
            contacts{
                name
                mobile
            }
        }
    }
`;
