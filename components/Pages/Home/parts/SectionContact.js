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
    <section className="container mx-auto mb-5">
      <div className="bg-customgray flex rounded-lg">
        <div className="w-6/12 border-r border-customgray-200">
          <div className="py-16 px-20">
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
        <div className="w-6/12">
          <form className="py-16 px-20">
            <div className="flex -mx-4">
              <div className="w-6/12 px-4">
                <Field label="Name" name="Name" type="text" />
              </div>
              <div className="w-6/12 px-4">
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
