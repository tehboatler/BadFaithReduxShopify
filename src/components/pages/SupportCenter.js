import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const Root = styled.div`
  width: 100%;
  height: auto;
  padding-top: 30vw;
  overflow: hidden;
`;

const Header = styled.h1`
  font-size: 5.5vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  color: black;
  padding-left: 5vw;
`;

const SubHeader = styled.h1`
  font-size: 4.5vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  color: black;
  font-weight: 700;
  padding-left: 5vw;
`;

const ItemTitle = styled.h1`
  font-size: 3.5vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: black;
`;
const ItemDesc = styled.h1`
  font-size: 3vw;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: black;
`;

export default class SupportCenter extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Root>
        <Header>Frequently Asked Questions</Header>
        <SubHeader> 1. Shipping (Important Information)</SubHeader>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>How long until my order arrives?</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                Once your order is placed, there is a 2-3 business day
                processing period, followed by a 10-20 business day shipping
                period.
              </ItemDesc>
              <ItemDesc>
                Please take this into account when purchasing from our website.
                Allow 2-3 weeks (depending on location) for your shipment to
                arrive.
              </ItemDesc>
              <ItemDesc>
                For international shipping outside the US, orders may take 4-6
                weeks to arrive.
              </ItemDesc>
              <ItemDesc>
                Please contact us at: support@starsigned.com if you have any
                questions for us.
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>Important Shipping Information</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                Our system must verify that the address you enter during
                checkout is a valid address. If our systems detect an error in
                your address, your order will be put on hold and we will email
                you, this could cause a delay during the processing period.
              </ItemDesc>
              <ItemDesc>
                To prevent any potential delays, please double check your
                address during checkout! If you notice your information is not
                correct, you MUST inform us before your item is shipped. If your
                item is shipped with any incorrect information, we are not held
                responsible.
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>Do you offer free shipping?</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>YES! Free Shipping is included in all orders!</ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>
                Will I be notified when my order is shipped?
              </ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                Yes! You will receive an email as soon as your order is shipped.
                If you have not received an email, please contact us!
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>Will I receive a tracking number?</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                Yes! All orders include tracking. The tracking number will be
                sent to the email address you provided us as soon as your order
                ships. Please Note: The order number IS NOT your tracking
                number.
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>Do you ship internationally?</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                Yes, we ship to most major countries! If there is an issue
                shipping to your country, shoot us an email and we will look
                into fixing it.
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>Can I cancel my order?</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                Yes, you may cancel your order and receive a full refund anytime
                BEFORE your order has shipped. If your order is shipped it is
                not possible to cancel your order unless the item is returned to
                us after delivery.
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>
                I didn't receive all of the products in my order.
              </ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                Products are sometimes shipped separately to ensure the fastest
                shipping time to our customers. If you are missing part of your
                order, do not worry as it is on it's way. If you'd like to
                double check on the orders, just email us and we will look into
                right away.
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <SubHeader> 2. Payment</SubHeader>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>How can I pay?</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                We accept all major credit cards. We are working on accepting
                Amazon Pay in future.
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>When will my card be charged?</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                Your card will be charged as soon as you place an order. With
                your shipping being included in our discounted products, we need
                to receive payments right away to keep our products low priced
                and including shipping costs.
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <SubHeader> 3. Returns, Exchanges and Order Cancels</SubHeader>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>I no longer want my item</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                If your order has not been shipped yet, don't worry, you can
                cancel it. Order can ONLY be canceled if your items have not
                been shipped. If you're unsure of the status of your order and
                want to cancel it, email us immediately!
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>I received the wrong items in the mail.</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                If you did not receive the right items, don't worry, we will fix
                it! Email us your Order # and we will look into the situation
                and help figure it out with you.
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <ItemTitle>My products are defective/incorrect.</ItemTitle>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ItemDesc>
                If something is wrong with the items you've received, email us
                ASAP and we will look into resolving the situation for you. This
                may include refunds or exchanges!
              </ItemDesc>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </Root>
    );
  }
}
