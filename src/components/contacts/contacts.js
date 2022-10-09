import React from "react";
import { Contact, ContactBox, ContactName, ContactsWrappet } from "./styled";

export const Contacts = () => {
    return (
        <ContactsWrappet>
            <ContactBox>
                <Contact height='100px' width='100px' src='https://sun9-north.userapi.com/sun9-79/s/v1/ig2/7k8S5rZsGRhn-rxiSEokHLSmW3csNaL7FsQEdjZr63zdxbYjGqhKTdmgNiUDHsf-oH2gTaFE2ZEHDWW5bUeBCGre.jpg?size=810x1080&quality=95&type=album' />
                <ContactName>Лера</ContactName>
            </ContactBox>
            <ContactBox>
                <Contact height='100px' width='100px' src='https://sun9-north.userapi.com/sun9-79/s/v1/ig2/7k8S5rZsGRhn-rxiSEokHLSmW3csNaL7FsQEdjZr63zdxbYjGqhKTdmgNiUDHsf-oH2gTaFE2ZEHDWW5bUeBCGre.jpg?size=810x1080&quality=95&type=album' />
                <ContactName>Саша</ContactName>
            </ContactBox>
            <ContactBox>
                <Contact height='100px' width='100px' src='https://sun9-north.userapi.com/sun9-79/s/v1/ig2/7k8S5rZsGRhn-rxiSEokHLSmW3csNaL7FsQEdjZr63zdxbYjGqhKTdmgNiUDHsf-oH2gTaFE2ZEHDWW5bUeBCGre.jpg?size=810x1080&quality=95&type=album' />
                <ContactName>Луиза</ContactName>
            </ContactBox>
        </ContactsWrappet>
    )
}