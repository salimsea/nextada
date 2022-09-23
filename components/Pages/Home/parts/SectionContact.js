import {
  Button,
  Field,
  SectionDescription,
  SectionTitle,
} from "components/atoms";
import React from "react";
import ItemContact from "./components/ItemContact";

const SectionContact = () => {
  return (
    <section className="container mx-auto mb-5 px-10 2xl:px-0">
      <div className="bg-customgray flex rounded-lg flex-wrap">
        <div className="md:w-6/12 w-full md:border-r border-b border-customgray-200">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <SectionTitle left>Contact</SectionTitle>
            <SectionDescription left>
              Call to hire me, open parttime job worker
            </SectionDescription>
            <ItemContact
              label="Mail"
              value="my@salimseal.com"
              icon="/ic-mail.svg"
              className="mt-10"
            />
            <ItemContact
              label="Phone"
              value="+62 821 1223 5774"
              icon="/ic-phone.svg"
              className="mt-7"
            />
            <ItemContact
              label="Address"
              value="Bogor, Indonesia, 16710"
              icon="/ic-map.svg"
              className="mt-7"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Name" name="Name" type="text" />
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <Field label="E-mail" name="Email" type="email" />
              </div>
            </div>
            <Field label="Subject" name="Subject" type="text" />
            <Field
              label="Question"
              name="Question"
              type="textarea"
              className="h-40"
            />
            <div className="text-right">
              <Button variant="block" pill>
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
