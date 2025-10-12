import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    idx: 1,
    question: "When and where is the event?",
    answer:
      "The event is taking place from 31st Jan to 2nd Feb 2024 in IIT(BHU) Varanasi. However, some of the events demand submissions prior to the main event taking place.",
  },
  {
    idx: 2,
    question: "How will I be notified about the updates?",
    answer:
      "You will be notified about all the updates via your registered email id. For urgent updates, you will be informed via phone call as well.",
  },
  {
    idx: 3,
    question: "What topics are covered in the E-Summit sessions?",
    answer:
      "E-Summits often cover a wide range of topics related to entrepreneurship, technology, and business. Common themes include startup strategies, digital innovation, leadership development, investment trends, and emerging technologies. The specific agenda may vary, so it's advisable to check the event schedule or program to ensure the sessions align with your interests and goals.",
  },
  {
    idx: 4,
    question: "Will there be any networking event in the Summit?",
    answer:
      "Yes, the E-Summit 25 will host a special networking event that will engage all the investors on board with esteemed professionals, startups and participants.",
  },
  {
    idx: 5,
    question: "How can a startup participate in the Summit?",
    answer:
      "Startups can become a part of the E-Summit 2025 through the Startup Expo - where they can set up their stalls for live demos of their product, and also through multiple events including the flagship event - The Million Dollar Pitch, where you get the chance to pitch your startup to a expert panel of investors from India's leading VCs",
  },
  {
    idx: 6,
    question: "Will accommodation be provided for interested attendees?",
    answer:
      "Yes, the team has dedicatedly made arrangements for the stay of all attendees and proper hospitality will be provided, including food. You can purchase the pass from above.",
  },
];

export default function FAQ() {
  return (
    <section className="flex justify-center items-center   pb-8 pt-6 md:py-10 relative">
      <Card className={"md:p-4 md:w-[780px]"}>
        <CardHeader className={""}>
          <CardTitle className={"text-center"}>
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="">
            {data.map((faq, index) => {
              return (
                <AccordionItem value={"item-" + index} key={index}>
                  <AccordionTrigger className={"text-start"}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className={""}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
